module.exports = function (app, db) {
  app.post('/list', (req, res) => {
    db.collection('songs').find().toArray((error, list) => {
      if (error || !list.length) res.send({ 'error': 'Не могу найти коллекцию, или она пуста' })
      res.send(list)
    })
  })
}