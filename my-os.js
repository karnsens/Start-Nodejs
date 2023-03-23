const os = require('os');
var freeMemory = os.freemem();
console.log('Free Memory: ' + freeMemory);

var user = os.userInfo();
console.log('User Info:');
console.log(user);

console.log(`Total Memory: ${os.totalmem()}`);