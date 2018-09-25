/**
 * Настройка сервера
 */
const setupServer = (app, dbInstance, dbConfig) => {
  // Server tools
  const cors = require('cors')
  const bodyParser = require('body-parser')
  const router = require('./routes/router')

  // Настраиваем сервер
  app.use(cors())
  app.use(bodyParser.json())

  // Настраиваем Роутинг
  router(app, dbInstance.db(dbConfig.dbName))
}

/**
 * Запуск сервера
 */
const runServer = (app, serverConfig) => {
  // Запускаем сервер
  app.listen(serverConfig.port, () => {
    console.log(`Server is running on ${serverConfig.port} port`)
  })
}

/**
 * Обработчик успешного подключения к базе
 */
const dbOnConnectHandler = (error, { dbInstance, dbConfig }) => {
  if (error) return console.log(error)

  // Получаем данные для запуска сервера
  const serverConfig = require('./config/server')
  const express = require('express')
  const app = express()

  // Настроить сервер
  setupServer(app, dbInstance, dbConfig)
  // Запустить сервер
  runServer(app, serverConfig)
}

/**
 * Запускаем подключение к базе
 */
const runDB = (dbConfig, onConnectHandler) => {
  const MongoClient = require('mongodb').MongoClient

  // Подключение к базе
  // при успешном подключении,
  // запускаем сервер
  MongoClient.connect(
    dbConfig.url,
    { useNewUrlParser: true },
    (error, dbInstance) => {
      onConnectHandler(error, {
        dbInstance,
        dbConfig
      })
    }
  )
}

/*************
 * Запускаем *
 ************/
// const dbConfig = require('./config/db')

// Подключиться к базе
// если все успешно, внутри запускаем сервер
runDB(
  require('./config/db'),
  dbOnConnectHandler
)