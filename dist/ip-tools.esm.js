// @ts-check

/**
 * Converts an IP address in string format (e.g., "192.168.1.1") to a 32-bit integer representation.
 * @param {string} ip 
 * @returns {number}
 */
function ipToLong(ip) {
    if (!isIPv4(ip)) {
        throw new Error(ip + ' is not a valid IPv4 address');
    }
    return ip.split('.').reduce(function (ipInt, octet) { return (ipInt * 256) + parseInt(octet, 10) }, 0);
}
/**
 * Converts an integer representation of an IP address (ipInt) to a string in the standard dotted decimal format (e.g., "192.168.1.1").
 * @param {number} ipInt 
 * @returns {string}
 */
function ipFromLong(ipInt) {
    return ((ipInt >>> 24) + '.' + (ipInt >> 16 & 255) + '.' + (ipInt >> 8 & 255) + '.' + (ipInt & 255));
}
/**
 * Returns the total number of IP addresses in the given range.
 * @param {string} ip1 
 * @param {string} ip2 
 */
function getTotalIPs(ip1, ip2) {
    const firstAddressLong = ipToLong(ip1);
    const lastAddressLong = ipToLong(ip2);

    const totalIPs = lastAddressLong - firstAddressLong + 1;
    return totalIPs;
}


/**
 * Checks if the given string is a valid IP range.
 * A valid IP range is a string with two IP addresses separated by a hyphen,
 * e.g. "192.168.1.1-192.168.1.100".
 * @param {string} ipRange - The string to be checked.
 * @returns {boolean} - True if the string is a valid IP range, false otherwise.
 */
function isRange(ipRange) {
    if (ipRange.indexOf('-') == -1) return false;

    let sides = ipRange.split("-");
    if (sides.length != 2) return false;

    if (!isIPv4(sides[0]) || !isIPv4(sides[1])) return false;

    let start_ip_long = ipToLong(sides[0]);
    let end_ip_long = ipToLong(sides[1]);

    return start_ip_long <= end_ip_long;
}

/**
 * Checks if given string is a valid CIDR notation.
 * @param {string} ipRange - The string to be checked.
 * @returns {boolean} - True if it is a valid CIDR notation, false otherwise.
 */
function isCidr(ipRange) {
    if (ipRange.indexOf('/') == -1) return false;

    let sides = ipRange.split("/");
    if (sides.length != 2) return false;
    let mask_bits = parseInt(sides[1]);

    return isIPv4(sides[0]) && (mask_bits > 0) && (mask_bits <= 32);
}

/**
 * Converts a CIDR notation to a range of IP addresses.
 * @param {string} cidr - The CIDR notation, e.g. "192.168.1.0/24"
 * @returns {[string, string]|null} - The range of IP addresses, e.g. ["192.168.1.0", "192.168.1.255"]
 */
function convertCidrToRange(cidr) {
    var part = cidr.split("/"); // part[0] = base address, part[1] = netmask
    var ipaddress = part[0].split('.');
    var netmaskblocks = ["0", "0", "0", "0"];
    if (!isIPv4(part[1])) {
        // part[1] has to be between 0 and 32
        let netmask = ("1".repeat(parseInt(part[1], 10)) + "0".repeat(32 - parseInt(part[1], 10))).match(/.{1,8}/g);
        if (netmask == null) {
            return null;
        }
        netmaskblocks = netmask.map(function (el) { return parseInt(el, 2).toString(); });
    } else {
        // xxx.xxx.xxx.xxx
        netmaskblocks = part[1].split('.').map(function (el) { return parseInt(el, 10).toString() });
    }
    // invert for creating broadcast address (highest address)
    var invertedNetmaskblocks = netmaskblocks.map(function (el) { return parseInt(el) ^ 255; });

    var baseAddress = ipaddress.map(function (block, idx) { return parseInt(block) & parseInt(netmaskblocks[idx]); });
    var broadcastaddress = baseAddress.map(function (block, idx) { return block | invertedNetmaskblocks[idx]; });
    return [baseAddress.join('.'), broadcastaddress.join('.')];
}

/**
 * Returns the IP address at the given index in the range [start_ip, end_ip].
 * @param {string} start_ip - The start of the range.
 * @param {string} end_ip - The end of the range.
 * @param {number} index - The index in the range to get the IP address at.
 */
function getIpFromRangeByIndex(start_ip, end_ip, index) {
    let start_ip_long = ipToLong(start_ip);
    let end_ip_long = ipToLong(end_ip);
    let result_ip_long = start_ip_long + index;

    if (result_ip_long > end_ip_long) return null;
    return ipFromLong(result_ip_long);
}

/**
 * Checks if the given IP address is in the range [start_ip, end_ip].
 * @param {string} ip - The IP address to check.
 * @param {string} start_ip - The start of the range.
 * @param {string} end_ip - The end of the range.
 * @returns {boolean} True if the IP address is in the range, false otherwise.
 */
function isIpInRange(ip, start_ip, end_ip) {
    let start_ip_long = ipToLong(start_ip);
    let end_ip_long = ipToLong(end_ip);
    let ip_long = ipToLong(ip);
    return (ip_long >= start_ip_long) && (ip_long <= end_ip_long);
}

/**
 * Checks if the given IP address is a private IP address.
 * Private IP addresses are those that are not routed on the internet and are reserved for use on private networks.
 * @param {string} ip - The IP address to check.
 * @returns {boolean} True if the IP address is a private IP address, false otherwise.
 */
function isPrivateIp(ip) {
    /*
Private IP address ranges
The ranges and the amount of usable IP's are as follows:
10.0.0.0 - 10.255.255.255 Addresses: 16,777,216
172.16.0.0 - 172.31.255.255 Addresses: 1,048,576
192.168.0.0 - 192.168.255.255 Addresses: 65,536
*/

    if (!isIPv4(ip)) {
        return false;
    }

    let ip_long = ipToLong(ip);

    return (ip_long >= 0x0A000000 && ip_long <= 0x0AFFFFFF) || (ip_long >= 0xAC100000 && ip_long <= 0xAC1FFFFF) || (ip_long >= 0xC0A80000 && ip_long <= 0xC0A8FFFF);
}

/**
 * Checks if the given IP address is a public IP address.
 * Public IP addresses are those that are routed on the internet and are not reserved for use on private networks.
 * @param {string} ip - The IP address to check.
 * @returns {boolean} - True if the IP address is a public IP address, false otherwise.
 */
function isPublicIp(ip) {
    return !isPrivateIp(ip);
}


/**
 * Returns the array of IP addresses in the range [start_ip, end_ip].
 * @param {string} start_ip - The start of the range.
 * @param {string} end_ip - The end of the range.
 * @param {number} [chunk_size=1000] - The number of IP addresses to include in the sub-range.
 * @returns {[string, string]} - The sub-range of IP addresses.
 */
function getSubRange(start_ip, end_ip, chunk_size = 1000) {
    let start_ip_long = ipToLong(start_ip);
    let end_ip_long = ipToLong(end_ip);

    if (start_ip_long > end_ip_long) {
        throw new Error('Start IP is greater than end IP');
    }

    let ip_long = (start_ip_long + chunk_size) <= end_ip_long ? start_ip_long + chunk_size : end_ip_long;
    return [start_ip, ipFromLong(ip_long)];
}

/**
 * Checks if given string is a valid IPv4 address.
 * @param {string} ip - The string to be checked.
 * @returns {boolean} - True if it is a valid IPv4 address, false otherwise.
 */
function isIPv4(ip) {
    return /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip);
}

/**
 * Checks if given string is a valid IPv6 address.
 * @param {string} ip - The string to be checked.
 * @returns {boolean} - True if it is a valid IPv6 address, false otherwise.
 */
function isIPv6(ip) {
    return /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/.test(ip);
}

/**
 * Generates an array of IP addresses between the given start and end IP
 * addresses, limited to the given chunk size.
 * @param {string} start_ip - The start of the range.
 * @param {string} end_ip - The end of the range.
 * @param {number} [chunk_size=1000] - The maximum number of IP addresses in the array.
 * @returns {Array.<string>} - An array of IP addresses in the range [start_ip, end_ip]
 *     with at most chunk_size elements.
 */
function generateArrayOfIp(start_ip, end_ip, chunk_size = 1000) {
    let array = [];
    let start_ip_long = ipToLong(start_ip);
    let end_ip_long = ipToLong(end_ip);

    if (start_ip_long > end_ip_long) {
        throw new Error('Start IP is greater than end IP');
    }

    if (start_ip_long === end_ip_long) {
        array.push(ipFromLong(start_ip_long));
        return array;
    }

    if (chunk_size < end_ip_long - start_ip_long) {
        end_ip_long = start_ip_long + chunk_size;
    }

    let ip_long = start_ip_long;
    while (ip_long <= end_ip_long) {
        array.push(ipFromLong(ip_long));
        ip_long += 1;
    }

    return array;
}

export { convertCidrToRange, generateArrayOfIp, getIpFromRangeByIndex, getSubRange, getTotalIPs, ipFromLong, ipToLong, isCidr, isIPv4, isIPv6, isIpInRange, isPrivateIp, isPublicIp, isRange };
