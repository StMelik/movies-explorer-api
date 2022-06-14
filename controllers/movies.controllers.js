const Movie = require('../models/Movie');

const getFilms = (req, res) => {
  const owner = req.user._id

  Movie.find({ owner })
    .then(films => {
      res.send(films)
    })
    .catch(err => console.log(err))
};

const createFilm = (req, res) => {
  const owner = req.user._id
  const { country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, movieId } = req.body;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
    owner
  })
    .then(film => {
      res.send(film)
    })
    .catch(err => console.log(err))
};

const deleteFilm = (req, res) => {
  const filmId = req.params.id

  Movie.findByIdAndDelete(filmId)
    .then(film => {
      res.send(film)
    })
    .catch(err => console.log(err))
};

module.exports = {
  getFilms,
  createFilm,
  deleteFilm,
};