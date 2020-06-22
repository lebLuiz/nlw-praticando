// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "nlw-pratica",
      user: "postgres",
      password: "postgres"
    },
    migrations: {
      tableName: 'knex-migrations',
      directory: `${__dirname}/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/database/seeds`
    }
  },
};
