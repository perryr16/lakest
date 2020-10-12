require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const { database } = require('./database')

const port = process.env.SERVER_PORT || 3000

const app = express()
app.use(cors())
app.use(bodyParser.json())

// TODO: Remove this function and actually implement authentication
app.use('/', (req, res, next) => {
  req.userId = 'TODO'
  next()
})

app.use('/trails', require('./trails'))


database.sync().then(() => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })
})