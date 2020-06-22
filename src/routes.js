const express = require('express');
const routes = express.Router();
const knex = require('./database')

const CompanyController = require('./controllers/CompanyController');

routes.get('/companies', CompanyController.index)
routes.post('/companies', CompanyController.create)
routes.put('/companies/:id', CompanyController.update)
routes.delete('/companies/:id', CompanyController.delete)

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

routes.post("/savecompany", (req, res) => {
   
    // req.body: O corpo do nosso formulário
    // console.log(req.body)

    // inserir dados no banco de dados
    /*const query = `
        INSERT INTO places (
            
        ) 
        VALUES ()
    `*/

})

routes.get("/search", async (req, res) => {

    //get data from DB
    
    const search = req.query.search

    if (search == "") {
        //search void
        console.log('Nao tem empresa nessa city')
        return res.render("search-results.html", { total: 0 })
    }

    const results = await knex('companies')//.where(`city`, `LIKE`, `%${search}%;`)

    console.log(results)

})

module.exports = routes;