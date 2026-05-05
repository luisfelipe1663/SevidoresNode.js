const http = require('http');


const server = http.createServer((req, res) =>{
    if(req.url === "/"){
        res.end("pagina inicial");
    }else if (req.url ==="/sobre"){
        res.end("pagina sobre");
    } else if (req.url === "/contato"){
        res.end("pagina de contatos");
    } else{
        res.end("pagina não encontrada");
    };
});
server.listen(3000);
