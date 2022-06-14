const { celebrate, Joi } = require('celebrate')
const { regExpLink } = require('./constants')

const validationProfile = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email(),
    name: Joi.string().min(2).max(30),
  })
})

const validationUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    name: Joi.string().min(2).max(30).required(),
    password: Joi.string().required(),
  })
})

const validationLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  })
})

const validationFilm = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(regExpLink),
    trailerLink: Joi.string().required().pattern(regExpLink),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    thumbnail: Joi.string().required().pattern(regExpLink),
    movieId: Joi.string().required(),
    owner: Joi.string().length(24).hex().required(),
  })
})

const validationFilmId = celebrate({
  params: Joi.object().keys({
    id: Joi.string().length(24).hex().required(),
  })
})

module.exports = {
  validationProfile,
  validationUser,
  validationLogin,
  validationFilm,
  validationFilmId,
}