const express = require("express");
const server = express();

//Pegar o DB
//const db = require("./database/db");

//Configurar pasta publica
server.use(express.static("public"));

//Habilitar o uso do req.body na aplicação
server.use(express.urlencoded({ extended: true }));

// Utilizando Template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: server,
    noCache: true
});

// Configurar caminhos da aplicação
//Página inicial
server.get("/", (req, res) => {
    return res.render("index.html", { title: "Um título" })
});

server.get("/create-company", (req, res) => {

    // req.query : Query Strings da nossa URL
    // console.log(req.query)

    return res.render("create-company.html");
});

server.post("/savecompany", (req, res) => {
   // AQUI ENTRA O SQLITE (DB) 
})


// Ligar o servidor:
server.listen(3030);