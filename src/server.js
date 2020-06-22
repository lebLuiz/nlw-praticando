const express = require("express");

const routes = require('./routes');
const server = express();

//Habilitar o uso do JSON
server.use(express.json());

//Configurar pasta publica
server.use(express.static("public"));

//Habilitar o server para usar as rotas
server.use(routes)

//Habilitar o uso do req.body na aplicação
server.use(express.urlencoded({ extended: true }));

// Utilizando Template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: server,
    noCache: true
});

// notFound
server.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})

//TRATANDO O ERRO - catch all
server.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({ error: error.message })
})

// Ligar o servidor:
server.listen(3030, () => console.log('Server is running'));