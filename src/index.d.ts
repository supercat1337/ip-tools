/**
 * Converts an IP address in string format (e.g., "192.168.1.1") to a 32-bit integer representation.
 * @param {string} ip
 * @returns {number}
 */
export function ipToLong(ip: string): number;
/**
 * Converts an integer representation of an IP address (ipInt) to a string in the standard dotted decimal format (e.g., "192.168.1.1").
 * @param {number} ipInt
 * @returns {string}
 */
export function ipFromLong(ipInt: number): string;
/**
 * Returns the total number of IP addresses in the given range.
 * @param {string} ip1
 * @param {string} ip2
 */
export function getTotalIPs(ip1: string, ip2: string): number;
/**
 * Checks if the given string is a valid IP range.
 * A valid IP range is a string with two IP addresses separated by a hyphen,
 * e.g. "192.168.1.1-192.168.1.100".
 * @param {string} ipRange - The string to be checked.
 * @returns {boolean} - True if the string is a valid IP range, false otherwise.
 */
export function isRange(ipRange: string): boolean;
/**
 * Checks if given string is a valid CIDR notation.
 * @param {string} ipRange - The string to be checked.
 * @returns {boolean} - True if it is a valid CIDR notation, false otherwise.
 */
export function isCidr(ipRange: string): boolean;
/**
 * Converts a CIDR notation to a range of IP addresses.
 * @param {string} cidr - The CIDR notation, e.g. "192.168.1.0/24"
 * @returns {[string, string]|null} - The range of IP addresses, e.g. ["192.168.1.0", "192.168.1.255"]
 */
export function convertCidrToRange(cidr: string): [string, string] | null;
/**
 * Returns the IP address at the given index in the range [start_ip, end_ip].
 * @param {string} start_ip - The start of the range.
 * @param {string} end_ip - The end of the range.
 * @param {number} index - The index in the range to get the IP address at.
 */
export function getIpFromRangeByIndex(start_ip: string, end_ip: string, index: number): string;
/**
 * Checks if the given IP address is in the range [start_ip, end_ip].
 * @param {string} ip - The IP address to check.
 * @param {string} start_ip - The start of the range.
 * @param {string} end_ip - The end of the range.
 * @returns {boolean} True if the IP address is in the range, false otherwise.
 */
export function isIpInRange(ip: string, start_ip: string, end_ip: string): boolean;
/**
 * Checks if the given IP address is a private IP address.
 * Private IP addresses are those that are not routed on the internet and are reserved for use on private networks.
 * @param {string} ip - The IP address to check.
 * @returns {boolean} True if the IP address is a private IP address, false otherwise.
 */
export function isPrivateIp(ip: string): boolean;
/**
 * Checks if the given IP address is a public IP address.
 * Public IP addresses are those that are routed on the internet and are not reserved for use on private networks.
 * @param {string} ip - The IP address to check.
 * @returns {boolean} - True if the IP address is a public IP address, false otherwise.
 */
export function isPublicIp(ip: string): boolean;
/**
 * Returns the array of IP addresses in the range [start_ip, end_ip].
 * @param {string} start_ip - The start of the range.
 * @param {string} end_ip - The end of the range.
 * @param {number} [chunk_size=1000] - The number of IP addresses to include in the sub-range.
 * @returns {[string, string]} - The sub-range of IP addresses.
 */
export function getSubRange(start_ip: string, end_ip: string, chunk_size?: number): [string, string];
/**
 * Checks if given string is a valid IPv4 address.
 * @param {string} ip - The string to be checked.
 * @returns {boolean} - True if it is a valid IPv4 address, false otherwise.
 */
export function isIPv4(ip: string): boolean;
/**
 * Checks if given string is a valid IPv6 address.
 * @param {string} ip - The string to be checked.
 * @returns {boolean} - True if it is a valid IPv6 address, false otherwise.
 */
export function isIPv6(ip: string): boolean;
/**
 * Generates an array of IP addresses between the given start and end IP
 * addresses, limited to the given chunk size.
 * @param {string} start_ip - The start of the range.
 * @param {string} end_ip - The end of the range.
 * @param {number} [chunk_size=1000] - The maximum number of IP addresses in the array.
 * @returns {Array.<string>} - An array of IP addresses in the range [start_ip, end_ip]
 *     with at most chunk_size elements.
 */
export function generateArrayOfIp(start_ip: string, end_ip: string, chunk_size?: number): Array<string>;
//# sourceMappingURL=index.d.ts.map