exports.up = knex => knex.schema.alterTable('companies', table => {
    table.text('phone')
    table.text('email')
})
  
exports.down = knex => knex.schema.alterTable('companies', table => {
    table.dropColumn('phone')
    table.dropColumn('email')
})
