const fs = require('fs');
const path = require('path');
const pathFile = path.join(__dirname,'hello.txt'); //home/mak/Desktop/Documentation/Node JS/m1


fs.writeFileSync(pathFile,'Welcome to Node JS ;-)');