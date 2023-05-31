const db = require('../helpers/db.helper')

exports.selectAllUsers = (cb) => {
  db.query('SELECT * FROM "users"', cb)
}

exports.insertUser = (data, cb) => {
  db.query(
    'INSERT INTO "users" ("picture", "firstName", "lastName", "email", "password") VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [
      data.picture,
      data.firstName,
      data.lastName,
      data.email,
      data.password,
    ],
    cb
  );
}

exports.changeUser = (id, data, cb) => {
  db.query(
    'UPDATE users SET "picture" = COALESCE(NULLIF($2, \'\'), "picture"), "firstName" = COALESCE(NULLIF($3, \'\'), "firstName"), "lastName" = COALESCE(NULLIF($4, \'\'), "lastName"), "email" = COALESCE(NULLIF($5, \'\'), "email"), "password" = COALESCE(NULLIF($6, \'\'), "password") WHERE id = $1 RETURNING *',
    [
      id,
      data.picture,
      data.firstName,
      data.lastName,
      data.email,
      data.password,
    ],
    cb
  );
}

exports.dropUser = (id, cb) => {
  db.query('DELETE FROM "users" WHERE id = $1', [id], cb);
};

exports.selectUser = (id, cb) => {
  db.query('SELECT * FROM "users" WHERE id = $1', [id], cb);
};