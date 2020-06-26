const knex = require("../database")
const { json } = require("express")

module.exports = {
    async index(req, res) {
        //get data from DB

        const results = await knex('companies')
            .select({
                company: 'companies.company',
                image: 'companies.image',
                cnpj: 'companies.responsible',
                address: 'companies.address',
                address2: 'companies.address2',
                state: 'companies.state',
                city: 'companies.city',
                items: 'companies.items',
            })
        //.where(`city`, `LIKE`, `%${search}%;`)

        //return console.log(results)
        return res.json(results)
    },

    async create(req, res, next) {
        try {

            /*const company = document.getElementsByName('company')
            const image = document.getElementsByName('image')
            const cnpj = document.getElementsByName('cnpj')
            const responsible = document.getElementsByName('responsible')
            const phone = document.getElementsByName('phone')
            const email = document.getElementsByName('email')
            const address = document.getElementsByName('address')
            const address2 = document.getElementsByName('address2')
            const state = document.getElementsByName('state')
            const city = document.getElementsByName('city')
            const items = document.getElementsByName('items')*/

            /*const values = [
                req.body.company,
                req.body.image,
                req.body.cnpj,
                req.body.responsible,
                req.body.phone,
                req.body.email,
                req.body.address,
                req.body.address2,
                req.body.state,
                req.body.city,
                req.body.items,
            ]*/

            const { company, image, cnpj, responsible, phone, email, address, address2, state, city, items } = req.body

            await knex('companies').insert([
                company,
                image,
                cnpj,
                responsible,
                phone,
                email,
                address,
                address2,
                state,
                city,
                items
            ])

            console.log('Cadastrou!')
            return res.status(201).send()

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