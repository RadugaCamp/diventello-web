module.exports = function (app, db) {
  app.get('/api/list', (req, res) => {
    db.collection('songs').find().toArray((error, list) => {
      if (error) res.send({ msg: 'Ошибка поиска коллекции', error })
      if (list && list.length) {
        res.send({
          result: { list },
          status: "success"
        })
      } else {
        res.send({ msg: 'Коллекция пуста', result: { list: [] } })
      }
    })
  })
}