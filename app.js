// const {getSecretKey,databaseName} = require('./settings');
// console.log(getSecretKey());
// console.log(databaseName);

const myObject = require('./settings');
console.log(myObject.getSecretKey());
console.log(myObject.databaseName);