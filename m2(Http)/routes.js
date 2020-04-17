const fs = require('fs')
const handleHttpFunc = (req, res) => {
    console.log('Omad')
    console.log('95sas5a9655s85855555555555')

    // console.log(req.method,req.url) // GET , /
    // console.log(req.headers) // host , connection , accept ,cookie
    // res.end('<h1>Saalam</h1>');

    res.setHeader('Contetnt-Type', 'text/html');
    if (req.url === '/') {
        res.write('<html>');
        res.write('<head><title>Hi MAK</title></head>');
        res.write('<body>');

        res.write(`
                    <form action="/message" method="POST">
                        <input type="text" name="msg" />
                        <button type="submit">Send</button>
                    </form>
            `);

        res.write('</body>');
        res.write('</html>');
        return res.end()
    }
    if (req.url === '/message' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk)
        });
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString()
            const msg = parseBody.split('=')[1];
            console.log(msg)
            fs.writeFile('message.txt', msg, () => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end()
            });
        });
    }

    res.write('<html>');
    res.write('<head><title>Hi MAK</title></head>');
    res.write('<body>');

    res.write(`
                <div>Dont request</div>
        `);

    res.write('</body>');
    res.write('</html>');
    res.end()
}

module.exports = {
    handler: handleHttpFunc,
    text: 'I love Node JS'
}

/**
 * Or :
 *  exports.handler = handleHttpFunc
 * 
 */