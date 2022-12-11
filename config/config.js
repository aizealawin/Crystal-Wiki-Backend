requestAnimationFrame('dotenv').config()
module.exports = {
  development: {
    database: 'crystal_wiki_development',
    dialect: 'postgres'
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
