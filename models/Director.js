'use strict';

const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./db/mediaStore.sqlite');


module.exports.getAll = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM directors`, (err, directors) => {
      if (err) {
        reject(err);
      }
      resolve(directors);
    })
  })
}

module.exports.getOneDirector = (id) => {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM directors WHERE dir_id=${id}`, (err, director) => {
      if (err) {
        reject(err);
      }
      resolve(director);
    })
  })
}

