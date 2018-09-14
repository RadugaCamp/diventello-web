const list = require('./api/list')
const song = require('./api/song')

module.exports = function (app, db) {
  list(app, db)
  song(app, db)
}