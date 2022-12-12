require('dotenv').config()
module.exports = {
  development: {
    database: 'DATABASE_URL',
    dialect: 'postgres',
    host: 'containers-us-west-152.railway.app',
    username: 'postgres',
    password: 'I9Dzg7fe6nxJSqwZk7RN',
    port: 7498
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
