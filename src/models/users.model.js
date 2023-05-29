const db = require('../helpers/db.helper')

exports.selectAllUsers = (cb) => {
  db.query('SELECT * FROM "users"', cb)
}

