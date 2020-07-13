const express = require('express');
const routes = express.Router();
const knex = require('./database')

const CompanyController = require('./controllers/CompanyController');
const { json } = require('express');

/*routes.get('/companies', CompanyController.index)
routes.post('/companies', CompanyController.create)
routes.put('/companies/:id', CompanyController.update)
routes.delete('/companies/:id', CompanyController.delete)*/

// Configurar caminhos da aplicação
//Página inicial
routes.get("/", (req, res) => {
    return res.render("index.html", { title: "Um título" })
});

routes.get("/create-company", (req, res) => {

    // req.query : Query Strings da nossa URL
    // console.log(req.query)

    return res.render("create-company.html");
});

routes.get("/company/:id", CompanyController.getById)

routes.post("/savecompany", CompanyController.create)

routes.get("/search", CompanyController.index)

module.exports = routes;