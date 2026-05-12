const http = require('http');

const server = http.createServer((req, res) =>{

    res.writeHead(200, {'Contente-Type': 'text/plain'});
    res.end("Servidor funcionando");
});

server.listen(3000, () =>{
    console.log('servidor rodando em http://localhost:3000');
});