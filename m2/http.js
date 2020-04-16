const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    console.log('Omad')

    // console.log(req.method,req.url) // GET , /
    // console.log(req.headers) // host , connection , accept ,cookie
    // res.end('<h1>Saalam</h1>');
    
    res.setHeader('Contetnt-Type','text/html');
    if(req.url === '/'){
        res.write('<html>');
        res.write('<head><title>Hi MAK</title></head>');
        res.write('<body>');

        res.write(`
                <form action="/message" method="POST">
                    <input type="text" name="message" />
                    <button type="submit">Send</button>
                </form>
        `);
        
        res.write('</body>');
        res.write('</html>');
        return res.end()
    }
    if(req.url === '/message'&& req.method === 'POST'){
        fs.writeFileSync('message.txt','DUMMY');
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end()
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
});
/**
 * میدل ورب نیست
 */
server.listen(3000,()=>{
    console.log('App Runnng on port 3000'.toLocaleUpperCase())
});
