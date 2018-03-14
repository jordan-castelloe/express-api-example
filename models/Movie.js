'use strict';

const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./db/mediaStore.sqlite');

module.exports.getAll = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT movies.*, directors.name AS director FROM movies JOIN directors ON director_id = directors.dir_id`, (err, movies) => {
      if (err) {
        reject(err);
      }
      resolve(movies);
    })
  })
}

module.exports.getOneMovie = (id) => {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM movies WHERE movie_id=${id}`, (err, movie) => {
      if (err) {
        reject(err);
      }
      resolve(movie);
    })
  })
}