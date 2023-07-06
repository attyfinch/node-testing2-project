// Update with your config settings.
const common = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { directory: './data/migrations' },
  seeds: { directory: './data/seeds' },
};

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    ...common,
    connection: {
      filename: './data/sfbooks.db3'
    }
  },

  testing: {
    ...common,
    connection: {
      filename: './data/test.db3'
    }
  }

};
