const fs = require('fs');
fs.writeFileSync('test.txt','Name: ');
fs.appendFileSync('test.txt','Karnsens');

console.log('Write File Done.');