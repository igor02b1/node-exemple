import * as express from "express";

const app = express();
//carregando a biblioteca em uma variavel

const port = 3000;
//transformar a porta em uma variavel para não dar erro.
    app.get('/participantes', (request, response) => {
        response.send('Hello participator!');
    });

    app.listen(port, () => {});
    // uma função do express que faz ele ouvir passivamente uma porta.
    //quando ele consegue se conectar com a porta ele exercuta o comando.
        console.log(`server is running at port: ${port}!`);
        