//Importando apenas a funçãio createServer do Módulo http do node
const {
    createServer
} = require('node:http');

const hostname = '127.0.0.1'; //logalhost
const port = 3000; //porta 3000

// Criando servidor 
const server = createServer((req, res) => {
    res.statusCode = 200; //sucesso

    //define o tipo de conteudo resposta 
    res.setHeader('content-Type', 'text/plain');
    res.end('servidor funcionando');

});

server.listen(port, hostname, () => {
    console.log(`Serve runnin at http://${hostname}:${port}/`);
});