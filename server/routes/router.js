const song = require('./api/song')

module.exports = function (app, db) {
  song(app, db)
}