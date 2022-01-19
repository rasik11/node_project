const { release } = require('os');
const os = require('os');

// info abt curent user
const user = os.userInfo();

// system uptime in seconds
console.log(`the system uptime is ${os.uptime}`);

// info abt os
const currentOS={
    name:os.type(),
    release:os.release(),
    totralMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS);

