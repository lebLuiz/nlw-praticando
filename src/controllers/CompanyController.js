const knex = require("../database")
const { json } = require("express")

module.exports = {
    
    // BUSCA ESTÁ COM ERRO
    async index(req, res) {

        // get city search
        const search = req.query.search
    
        if (search == "") {
            //search void
            console.log('Nao tem empresa nessa city')
            return res.render("search-results.html", { total: 0 })
        } else{
    
            /*const results =*/ await knex('companies')
            .select([{
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
            }])
            .where('city', 'LIKE', `%${search}%`)
            .then( rows =>
                rows.map(row => {
                    const total = rows.length
    
                    console.log(row)

                    if(row){
                        return res.render("search-results.html", { results: rows, total });
                        
                    }
                    
                    return res.render("search-results.html", { total: 0 })
                }));
        }
    },

    async create(req, res, next) {
        try {

            const { company, image, cnpj, responsible, phone, email, address, address2, state, city, items } = req.body

            await knex('companies').insert([{
                company: `${company}`,
                image: `${image}`,
                cnpj: `${cnpj}`,
                responsible: `${responsible}`,
                phone: `${phone}`,
                email: `${email}`,
                address: `${address}`,
                address2: `${address2}`,
                state: `${state}`,
                city: `${city}`,
                items: `${items}`
            }]).then(result => {
                console.log('Cadastrou!')
                return res.render("create-company.html", { saved: true })
                
            }).catch((err) => {
                console.log(err)
            })

        } catch (error) {
            next(error);
        }
    },

    async update(req, res, next) {
        try {
            const { company, cnpj, responsible, phone, email, address, address2, state, city } = req.body
            const { id } = req.params

            await knex('companies')
                .update({
                    company,
                    cnpj,
                    responsible,
                    phone,
                    email,
                    address,
                    address2,
                    state,
                    city
                })
                .where({ id })

            return res.send()
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params

            await knex('companies')
                .where({ id })
                .del()

            return res.send()
        } catch (error) {
            next(error)
        }
    }
}