const { getAll, getOneMovie } = require('../models/Movie');

// this ends up being middleware
module.exports.getAllMovies = (req, res, next) => {
  getAll()
    .then(movies => {
      res.status(200).json(movies);
    })
    .catch(error => {
      next(error);
    })
}

module.exports.getOneMovie = (req, res, next) => {
  getOneMovie(req.params.id)
    .then(movie=> {
      res.status(200).json(movie);
    })
    .catch(error => {
      next(error);
    })
}