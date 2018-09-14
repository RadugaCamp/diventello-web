var ObjectID = require('mongodb').ObjectID

module.exports = function (app, db) {
  app.post('/song', (req, res) => {
    if (req.body) {
      const id = req.body.id

      db.collection('songs').findOne({ "_id": new ObjectID(id) }, (error, item) => {
        if (error || !item) res.send({ 'error': 'Не могу найти песню id: ' + id})
        res.send(item)
      })
    } else {
      res.send({ 'error': 'Пустое тело запроса: ' + req.body })
    }
  })
}