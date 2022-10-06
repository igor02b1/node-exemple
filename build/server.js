"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
//carregando a biblioteca em uma variavel
var port = 3000;
//transformar a porta em uma variavel para não dar erro.
app.get('/participantes', function (request, response) {
    response.send('Hello participator!');
});
app.listen(port, function () { });
// uma função do express que faz ele ouvir passivamente uma porta.
//quando ele consegue se conectar com a porta ele exercuta o comando.
console.log("server is running at port: ".concat(port, "!"));
