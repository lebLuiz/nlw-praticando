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
   
    // req.body: O corpo do nosso formulário
    // console.log(req.body)

    // inserir dados no banco de dados
    /*const query = `
        INSERT INTO places (
            
        ) 
        VALUES ()
    `*/

})

server.get("/search", (req, res) => {
    return res.render("search-results.html", { total: 0 })
})


// Ligar o servidor:
server.listen(3030, () => console.log('Server is running'));