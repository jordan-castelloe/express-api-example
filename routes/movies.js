const { Router } = require('express');
const express = require('express');
const movieRouter = Router();
const { getAllMovies, getOneMovie } = require('../controllers/movieCtrl');

movieRouter.get("/movies", getAllMovies)
movieRouter.get("/movies/:id", getOneMovie)
// console.log('express', express);
// console.log('object.keys express', Object.keys(express))
// console.log('movie router keys', Object.keys(movieRouter)); // 
// console.log('movie router prototype', Object.getPrototypeOf(movieRouter)); // returns the router object
// console.log('is the movie router prototype the Router object?', Object.getPrototypeOf(movieRouter) === Router) // true
// console.log('whats the prototype of router?', Object.getPrototypeOf(Router)); // 'native code'
// console.log('router keys', Object.keys(Router)); // this include get, use, etc
// console.log('Router with capital R', Router); // looks like function;
module.exports = movieRouter;