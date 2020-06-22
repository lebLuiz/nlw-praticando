
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        { company: 'Company', cnpj: '0393.133/1314-100'},
        { company: 'Company2', cnpj: '0393.133/1314-101'}
      ]);
    });
};
