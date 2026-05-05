// importando o modulo HTTP do node.js
// modulo nativo que permite criar servidores web
const http = require('http');

// criando um servidor
//createServe: recebe uma função que sera executada toda vez que alguem acessar nosso servidor
const server = http.createServer((req, res)=>{
    //req (request) = requisição
    //res (response) = resposta

    //Envia uma resposta para o navegador e finaliza a requisição
    res.end("Meu primeiro servidor");
});
//Faz o servidor escutar a porta 3000
server.listen(3000);
//PORTAS:
// porta 300 -> desenvolvimento (node, react..)
//porta 80 -> http padrão 
//porta 442 -> https
//porta 5000 -> API`s
//porta 8080 -> alternativa pra web