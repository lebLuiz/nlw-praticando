const knex = require("../database")

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
            const { company, cnpj, responsible, phone, email, address, address2, state, city } = req.body
            await knex('companies').insert({
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

            return res.status(201).send()
        } catch (error) {
            next(error)
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