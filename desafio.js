const http = require('http');

const server = http.createServer((req, res)=> {
    console.log(req.method);
    res.writeHead(200,{ 'content-Type':'text/plain'});
    res.end("teste");
});
server.listen(3000, ()=>{
    console.log("servidor rodando em http://localhost:3000")

});