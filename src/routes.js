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

routes.post("/savecompany", async (req, res, next) => {
    //const { company, image, cnpj, responsible, phone, email, address, address2, state, city, items } = req.body

    /*const companyy = document.getElementsByName('company')
    const imagee = document.getElementsByName('image')
    const cnpjj = document.getElementsByName('cnpj')
    const responsiblee = document.getElementsByName('responsible')
    const phonee = document.getElementsByName('phone')
    const emaill = document.getElementsByName('email')
    const addresss = document.getElementsByName('address')
    const addresss2 = document.getElementsByName('address2')
    const statee = document.getElementsByName('state')
    const cityy = document.getElementsByName('city')
    const itemss = document.getElementsByName('items')*/

    try {

        await knex('companies').insert({
            company: `${req.body.company}`,
            image: `${req.body.image}`,
            cnpj: `${req.body.cnpj}`,
            responsible: `${req.body.responsible}`,
            phone: `${req.body.phone}`,
            email: `${req.body.email}`,
            address: `${req.body.address}`,
            address2: `${req.body.address2}`,
            state: `${req.body.state}`,
            city: `${req.body.city}`,
            items: `${req.body.items}`
        })

        console.log('Cadastrou!')
        return res.render("company-created.html")

    } catch (error) {
        next(`ERROR: ${error}`)
    }
}

    // req.body: O corpo do nosso formulário
    // console.log(req.body)

    // inserir dados no banco de dados
    /*const query = `
        INSERT INTO places (
            
        ) 
        VALUES ()
    `*/

)

routes.get("/search", async (req, res, next) => {

    //get data from DB

    const search = req.query.search

    // Pegando quantidade Registros
    //var total = 0

    if (search == "") {
        //search void
        console.log('Nao tem empresa nessa city')
        return res.render("search-results.html", { total: 0 })
    } else{

        /*const results =*/ await knex('companies')
        .select({
            company: 'company',
            image: 'image',
            cnpj: 'cnpj',
            responsible: 'responsible',
            address: 'address',
            address2: 'address2',
            state: 'state',
            city: 'city',
            items: 'items',
            phone: 'phone',
            email: 'email'
        })
        .where('city', 'LIKE', `%${search}%`)
        .then( rows =>
            rows.map(row => {
                const total = rows.length

                console.log(row)

                return res.render("search-results.html", { results: rows, total });
            }));
            
    //return CompanyController.index()

    //return res.render("search-results.html", { results: results });

    }

})

module.exports = routes;