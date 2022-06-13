const router = require('express').Router();
const { getFilms, createFilm, deleteFilm } = require('../controllers/movies.controllers')

router.get('/', getFilms);

router.post('/', createFilm);

router.delete('/', deleteFilm);

module.exports = router;