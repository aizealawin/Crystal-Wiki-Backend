const express = require('express')
const cors = require('cors')
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'containers-us-west-152.railway.app',
  database: 'railway',
  username: 'postgres',
  password: 'I9Dzg7fe6nxJSqwZk7RN',
  port: 7498
})
const app = express()

const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) =>
  res.json({ message: 'Backend Running! Go catch it!' })
)
app.use('/api', AppRouter)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
