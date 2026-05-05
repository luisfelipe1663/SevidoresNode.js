const http = require('http');

const server = http.createServer((req, res) =>{
    //escreve no console o tipo de metodo da requisição que esta sendo feira(sendo GET, POST, PUT ou DELETE)
    console.log(req.method);
    //WRITEHEAD me permite passar tanto o statuscode como o tipo de dado que sera respondido pelo servidor.
    //Neste caso:
    //Status Code = 200 e o dado sera um texto simples
 res.writeHead(200,{'content-Type': 'text/plain'});
 res.end(`Metodo recebido:${req.method}`);
});
server.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000');
    console.log("http://localhost:3000");
});