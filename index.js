const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(url==='/'){
        res.end('Hello from Finly Node.js');
    } else if(url === '/contact'){
        res.end('Contact Page');
    } else if(url === '/about'){
        res.end('About Page');
    } else{
        res.writeHead(404);
        res.end('Sorry, Page Not Found.');
    }
});

const port = 3000;

server.listen(port, ()=>{
    console.log(`Server running on Port ${port}`);
});