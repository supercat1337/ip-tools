// @ts-check

import {  getIpFromRangeByIndex, getTotalIPs, isIpInRange, isPrivateIp, isPublicIp, isIPv4, isIPv6, isCidr, ipFromLong, ipToLong, convertCidrToRange, getSubRange, isRange, generateArrayOfIp } from '../src/index.js';

const start_ip = '192.168.1.0';
const end_ip = '192.168.1.255';

const end_ip_2 = '192.168.1.5';

const index = 2;

const ip = getIpFromRangeByIndex(start_ip, end_ip, index);
const ip_long = ipToLong(ip);

console.log(`The ${index}th IP address in the range is: ${ip}`);

console.log(`The number of IP addresses in the range is: ${getTotalIPs(start_ip, end_ip)}`);

console.log(`The IP address ${ip} is ${isIpInRange(ip, start_ip, end_ip) ? '' : 'not'} in the range [${start_ip}, ${end_ip}]`);

console.log(`The IP address ${ip} is ${isPrivateIp(ip) ? '' : 'not'} a private IP address`);

console.log(`The IP address ${ip} is ${isPublicIp(ip) ? '' : 'not'} a public IP address`);

console.log(`The IP address ${ip} is ${isIPv4(ip) ? '' : 'not'} a valid IPv4 address`);

console.log(`The IP address ${ip} is ${isIPv6(ip) ? '' : 'not'} a valid IPv6 address`);

console.log(`The string "192.168.1.0/24" is ${isCidr('192.168.1.0/24') ? '' : 'not'} a valid CIDR notation`);

console.log(`The string "192.168.1.0-192.168.1.255" is ${isRange('192.168.1.0-192.168.1.255') ? '' : 'not'} a valid range`);

console.log(`The CIDR notation "192.168.1.0/24" is converted to a range of IP addresses: ${convertCidrToRange('192.168.1.0/24')}`);

console.log(`The range of IP addresses in the CIDR notation "192.168.1.0/24" is: ${getSubRange('192.168.1.0', '192.168.1.255', 5)}`);

console.log(`The number value of the IP address ${ip} is ${ipFromLong(ip_long)}`);

console.log(`The number value of the IP address ${ip} is ${ipToLong(ip)}`);

console.log(`The array of IP addresses in the range [${start_ip}, ${end_ip_2}] is: ${generateArrayOfIp(start_ip, end_ip_2)}`);
