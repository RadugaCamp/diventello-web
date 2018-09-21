var ObjectID = require('mongodb').ObjectID

module.exports = function (app, db) {
  // POST добавить
  app.post('/api/song', (req, res) => {
    if (req.body) {
      if (req.body) {
        let item = req.body.item
        if (item) {
          db.collection('songs').insertOne(item, (error, result) => {
            if (error) res.send({ 'error': 'Не могу добавить песню' })
            res.send({
              result: { ...result["ops"][0] },
              status: "success"
            })
          })
        } else {
          res.send({ 'error': 'Пустое тело запроса: ' + req.body })
        }
      }
    } else {
      res.send({ 'error': 'Пустое тело запроса: ' + req.body })
    }
  })
  // GET:ID получить по id
  app.get('/api/song/:id', (req, res) => {
    if (req.params.id) {
      const id = req.params.id

      db.collection('songs').findOne({ "_id": new ObjectID(id) }, (error, item) => {
        if (error || !item) res.send({ 'msg': 'Не могу найти песню id: ' + id, error })
        res.send(item)
      })
    } else {
      res.send({ 'error': 'Пустое тело запроса: ' + req.params })
    }
  })
  // PUT:ID обновить по id
  app.put('/api/song/:id', (req, res) => {
    if (req.params.id) {
      const id = req.params.id
      const item = req.body.item

      db.collection('songs').updateOne({ "_id": new ObjectID(id) }, { $set: { rows: item.rows }}, (error, item) => {
        if (error) res.send({ 'msg': 'Не могу обновить песню id: ' + id, error })
        res.send(item)
      })
    } else {
      res.send({ 'error': 'Пустое тело запроса: ' + req.body })
    }
  })
  // DELETE:ID удалить по id
  app.delete('/api/song/:id', (req, res) => {
    if (req.params.id) {
      const id = req.params.id

      db.collection('songs').deleteOne({ "_id": new ObjectID(id) }, (error, result) => {
        if (error) res.send({ 'msg': 'Не могу удалить песню id: ' + id, error })
        res.send({
          result: { id },
          status: "success"
        })
      })
    } else {
      res.send({ 'error': 'Пустое тело запроса: ' + req.body })
    }
  })
}