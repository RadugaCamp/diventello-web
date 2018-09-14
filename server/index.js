const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const db = require('./config/db')
const app = express()

/**
 * Подключение к базе
 */
MongoClient.connect(db.url, { useNewUrlParser: true }, (error, database) => {
  if (error) return console.log(error)

  /**
 * Настраиваем сервер
 */
  app.use(cors())
  app.use(bodyParser.json())

  /**
   * Настраиваем Роутинг
   */
  require('./routes/router')(app, database.db('diventello'))

  /**
   * Запускаем
   */
  const port = 8078
  app.listen(port, () => {
    console.log('server is running on ' + port)
  })
})