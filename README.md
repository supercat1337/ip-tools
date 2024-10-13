# IP Tools

A collection of JavaScript functions for working with IP addresses, IP ranges, and CIDR notations.

Installation
```
$ npm install @supercat1337/ip-tools
```

## Functions

### `convertCidrToRange(cidr)`

* `cidr`: The CIDR notation, e.g. "192.168.1.0/24"
* Returns: An array of two IP addresses representing the range of addresses that the CIDR notation covers, e.g. ["192.168.1.0", "192.168.1.255"]

Example:
```javascript
import { convertCidrToRange } from "@supercat1337/ip-tools";
const cidr = '192.168.1.0/24';
const range = convertCidrToRange(cidr);
console.log(range); // Output: ["192.168.1.0", "192.168.1.255"]
```

### `getIpFromRangeByIndex(index)`

* `index`: The index of the IP address in the range
* Returns: The IP address at the given index in the range

Example:
```javascript
import { getIpFromRangeByIndex } from "@supercat1337/ip-tools";
const cidr = '192.168.1.0/24';
const range = convertCidrToRange(cidr);
const ip = getIpFromRangeByIndex(range, 0);
console.log(ip); // Output: "192.168.1.0"
```

### `getIpRangeByCidr(cidr)`

* `cidr`: The CIDR notation, e.g. "192.168.1.0/24"
* Returns: An array of two IP addresses representing the range of addresses that the CIDR notation covers, e.g. ["192.168.1.0", "192.168.1.255"]

Example:
```javascript
import { getIpRangeByCidr } from "@supercat1337/ip-tools";
const cidr = '192.168.1.0/24';
const range = getIpRangeByCidr(cidr);
console.log(range); // Output: ["192.168.1.0", "192.168.1.255"]
```

### `getSubRange(start_ip, end_ip, chunk_size=1000)`

* `start_ip`: The start IP address, e.g. "192.168.1.0"
* `end_ip`: The end IP address, e.g. "192.168.1.255"
* `chunk_size`: The number of IP addresses to include in each sub-range, defaults to 1000
* Returns: An array of two IP addresses representing the sub-range of addresses, e.g. ["192.168.1.0", "192.168.1.3"]

Example:
```javascript
import { getSubRange } from "@supercat1337/ip-tools";
const start_ip = '192.168.1.0';
const end_ip = '192.168.1.3';
const subRange = getSubRange(start_ip, end_ip);
console.log(subRange); // Output: ["192.168.1.0", "192.168.1.3"]
```

### `getTotalIPs(ip1, ip2)`

* `ip1`: The start IP address, e.g. "192.168.1.0"
* `ip2`: The end IP address, e.g. "192.168.1.255"
* Returns: The total number of IP addresses in the given range

Example:
```javascript
import { getTotalIPs } from "@supercat1337/ip-tools";
const ip1 = '192.168.1.0';
const ip2 = '192.168.1.255';
const totalIPs = getTotalIPs(ip1, ip2);
console.log(totalIPs); // Output: 256
```

### `ipFromLong(ipInt)`

* `ipInt`: The IP address as an integer
* Returns: The IP address in string format, e.g. "192.168.1.1"

Example:
```javascript
import { ipFromLong } from "@supercat1337/ip-tools";
const ipInt = 16909060;
const ip = ipFromLong(ipInt);
console.log(ip); // Output: "192.168.1.1"
```

### `ipToLong(ip)`

* `ip`: The IP address, e.g. "192.168.1.1"
* Returns: The IP address as an integer

Example:
```javascript
import { ipToLong } from "@supercat1337/ip-tools";
const ip = '192.168.1.1';
const ipInt = ipToLong(ip);
console.log(ipInt); // Output: 16909060
```

### `isCidr(cidr)`

* `cidr`: The CIDR notation, e.g. "192.168.1.0/24"
* Returns: `true` if the CIDR notation is valid, `false` otherwise

Example:
```javascript
import { isCidr } from "@supercat1337/ip-tools";
const cidr = '192.168.1.0/24';
const isCidr = isCidr(cidr);
console.log(isCidr); // Output: true
```

### `isIPv4(ip)`

* `ip`: The IP address, e.g. "192.168.1.1"
* Returns: `true` if the IP address is valid, `false` otherwise

Example:
```javascript
import { isIPv4 } from "@supercat1337/ip-tools";
const ip = '192.168.1.1';
const isIPv4 = isIPv4(ip);
console.log(isIPv4); // Output: true
```

### `isIPv6(ip)`

* `ip`: The IP address, e.g. "2b5b:1e49:8d01:c2ac:fffd:833e:dfee:13a4"
* Returns: `true` if the IP address is valid, `false` otherwise

Example:
```javascript
import { isIPv6 } from "@supercat1337/ip-tools";
const ip = '2b5b:1e49:8d01:c2ac:fffd:833e:dfee:13a4';
const isIPv6 = isIPv6(ip);
console.log(isIPv6); // Output: true
```

### `isIpInRange(ip, range)`

* `ip`: The IP address, e.g. "192.168.1.0"
* `range`: An array of two IP addresses representing the range of addresses that the CIDR notation covers, e.g. ["192.168.1.0", "192.168.1.255"]
* Returns: `true` if the IP address is in the range, `false` otherwise

Example:
```javascript
import { isIpInRange } from "@supercat1337/ip-tools";
const ip = '192.168.1.0';
const range = ['192.168.1.0', '192.168.1.255'];
const isIpInRange = isIpInRange(ip, range);
console.log(isIpInRange); // Output: true
```

### `isPrivateIp(ip)`

* `ip`: The IP address, e.g. "192.168.1.1"
* Returns: `true` if the IP address is in the private IP range, `false` otherwise

Example:
```javascript
import { isPrivateIp } from "@supercat1337/ip-tools";
const ip = '192.168.1.1';
const isPrivateIp = isPrivateIp(ip);
console.log(isPrivateIp); // Output: true
```

### `isPublicIp(ip)`

* `ip`: The IP address, e.g. "192.168.1.1"
* Returns: `true` if the IP address is in the public IP range, `false` otherwise

Example:
```javascript
import { isPublicIp } from "@supercat1337/ip-tools";
const ip = '192.168.1.1';
const isPublicIp = isPublicIp(ip);
console.log(isPublicIp); // Output: false
```

### `isRange(ipRange)`

* `ipRange`: A valid IP range is a string with two IP addresses separated by a hyphen, e.g. 192.168.1.1-192.168.1.100
* Returns: `true` if the IP range is valid, `false` otherwise

Example:
```javascript
import { isRange } from "@supercat1337/ip-tools";
const ipRange = '192.168.1.1-192.168.1.100';
const isRange = isRange(ipRange);
console.log(isRange); // Output: true
```

### `generateArrayOfIp(start_ip, end_ip, chunk_size=1000)`

* `start_ip`: The start IP address, e.g. "192.168.1.0"
* `end_ip`: The end IP address, e.g. "192.168.1.255"
* `chunk_size`: The number of IP addresses to include in each sub-range, defaults to 1000
* Returns: An array of IP addresses in the range [start_ip, end_ip] with at most chunk_size elements

Example:
```javascript
import { generateArrayOfIp } from "@supercat1337/ip-tools";
const start_ip = '192.168.1.0';
const end_ip = '192.168.1.255';
const chunk_size = 1000;
const array = generateArrayOfIp(start_ip, end_ip, chunk_size);
console.log(array); // Output: ["192.168.1.0", "192.168.1.1", "192.168.1.2", ...]
```

## License
MIT License
