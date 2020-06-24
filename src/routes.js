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

routes.get("/search", async (req, res, next) => {

    //get data from DB

    const search = req.query.search

    var pega = CompanyController.index

    // Pegando quantidade Registros
    var total = pega.length

    if (search == "") {
        //search void
        console.log('Nao tem empresa nessa city')
        return res.render("search-results.html", { total: 0 })
    }

    const results = await knex('companies')
            .select({
                company: 'companies.company',
                image: 'companies.image',
                cnpj: 'companies.cnpj',
                responsible: 'companies.responsible',
                address: 'companies.address',
                address2: 'companies.address2',
                state: 'companies.state',
                city: 'companies.city',
                items: 'companies.items',
                phone: 'companies.phone',
                email: 'companies.email'
            }).where('city', 'LIKE', `%${search}%`);
    
    //return CompanyController.index()
    
    return res.render("search-results.html", { results: results, total });

})

module.exports = routes;