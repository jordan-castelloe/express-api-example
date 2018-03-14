const { Router } = require('express');
const directorRouter = Router();
const {getAllDirectors, getOneDirector} = require('../controllers/directorCtrl');

directorRouter.get("/directors", getAllDirectors)
directorRouter.get('/directors/:id', getOneDirector)

module.exports = directorRouter;
