
exports.up = knex =>  knex.schema.createTable('companies', table => {
        table.increments('id')
        table.text('company').unique().notNullable()
        table.text('image')
        table.text('cnpj').unique().notNullable()
        table.text('responsible')
        /* OPCIONAL CRIAR ASSIM, PORÉM SE FOR CRIAR,
         IGNORE O MIGRATE 'add_column_phoneEemail_to_company'
        table.text('phone')
        table.text('email')*/
        table.text('address')
        table.text('address2')
        table.text('state')
        table.text('city')
        table.text('items')

        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('companies')
