const http = require('http');
const fs = require('fs');

const {
    handler
} = require('./routes')

const server = http.createServer(handler);
/**
 * میدل ورب نیست
 */
server.listen(3000, () => {
    console.log('*App Runnng on port 3000'.toLocaleUpperCase())
});