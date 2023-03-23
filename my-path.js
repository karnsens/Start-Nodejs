const path = require('path');
const pathObject1 = path.parse(__filename);
console.log(pathObject1);

const pathObject2 = path.parse(__dirname);
console.log(pathObject2);