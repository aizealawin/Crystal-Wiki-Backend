require('dotenv').config()
module.exports = {
  development: {
    database: 'railway',
    dialect: 'postgres',
    host: process.env.DATABASE_HOST,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
  },
  test: {
    database: 'crystal_wiki_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
