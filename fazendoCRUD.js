//Importando o módulo nativo HTTP do Node.js
const http = require('http');

//Simulação de um "banco de dados" em memoria usando um array de objetos
let livro =[
    {
        id: 1,
        titulo:'O pequeno Principe',
        autor:'Antonie de Saint-Exupéry'
}
];

//Criando um Servidor HTTP
const server= http.createServer((req, res) =>{
    //Captira o método da requisição (GET, POST, PUT ou DELETE)
    const metodo = req.method;

    //Captura a URL da requisição (/livros)
    const url= req.url

    //Define que a resposta será em JSON
    res.setHeader('Contet-Type', 'application/JSON');

    //Construindo o método GET - Listar livros
    if(url === '/livros' && metodo ==="GET"){
        res.statusCode = 200; //sucesso
        //Retornará a lista de livros em formato JSON
        res.end(JSON.stringify(livro));
        return;// encerra a execução dessa requisição
    };

    //Construindo o método POST- Cadastrar livro
    if(url === '/livros' && metodo === 'POST'){
        //Variavel para armazenar od dados enviados no body
        let body ='';
        //Evento disparado quando chegam pedaços da requisição
        req.on('data', parte =>{
            body += parte; //concatena os pedaços
        });
        //Evento a ser disparado depois que todos os dados chegam
        req.on('end', ()=>{
            //converte o JSON em objeto JavaScript
            const novolivro =JSON.parse(body);
            //Adiciona o novo livro ao array de livros
            livro.push(novolivro);
            res.statusCode = 201; //Criado com sucesso

            res.end(JSON.stringify({
                mensagem: 'Livro criado com sucesso',
                livro: novolivro
            }));
        });
        return; //Encerra a requisição
    };

    //Construindo o metodo PUT - Atualizar livro
    if(url ==='/livros' && metodo ==='PUT'){
         //Variavel para armazenar od dados enviados no body
        let body ='';
        //Evento disparado quando chegam pedaços da requisição
        req.on('data', parte =>{
            body += parte; //concatena os pedaços
        });
        req.on('end', ()=>{
            //Recebe todos os dados atulizados vindos do cliente
            const livroAtualizado = JSON.parse(body);
            //percorre a lista de livro(array) e substitui o livro com ID igual 
            livro = livro.map(livros =>{
                //Se encontrar o mesmo ID, substitui
                if(livros.id === livroAtualizado.id){
                    return livroAtualizado;
                };
                //Devolve todas as atualizações e o que não mudar, retorna igual.
                return livros;
            });
            res.statusCode = 202; //sucesso
            res.end(JSON.stringify({
                mensagem:' Livro atualizado com sucesso',
                livro: livro
            }))
        });
        return;
    };

     //Construindo o metodo DELETE- Remover livro
     if(url === "/livros" && metodo === "DELETE"){
        let body = '';

        req.on('data', parte =>{
            body+= parte;

        });

        req.on('end', () =>{
            //Recebe o ID do livro a ser removido
            const dados = JSON.parse(body);

            //Filtra o array, removendo o livro com o ID informado.
            //Dessa forma, o array de livros será mantido apenas com os objetos cujo ID é diferente do removido.
            livro = livro.filter(livros => livros.id !== dados.id);

            res.statusCode = 200;//Sucesso
            res.end(JSON.stringify({
                mensagem: 'Livro removido com sucesso!',
                livro: livro
            }));
        });
        return;
     };
     


    //Rota não encontrada
    res.statusCode = 404; //Não encontrada
    //Convertendo a resposta em JSON e exibindo a mensagem
    res.end(JSON.stringify({
        mensagem: 'rota não encontrada'
    }));
});
server.listen(3000, () =>{
    console.log('Server running in http://localhost:3000');
});