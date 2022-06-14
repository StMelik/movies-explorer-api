const mongoose = require('mongoose');
const validator = require('validator')
const configURLValidator = require('./utils/configURLValidator')

const movieScheme = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },

  director: {
    type: String,
    required: true,
  },

  duration: {
    type: Number,
    required: true,
  },

  year: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
    validate: {
      validator(imageURL) {
        return validator.isURL(imageURL, configURLValidator)
      }
    },
  },

  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator(imageURL) {
        return validator.isURL(imageURL, configURLValidator)
      }
    },
  },

  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator(imageURL) {
        return validator.isURL(imageURL, configURLValidator)
      }
    },
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  movieId: {
    required: true,
  },

  nameRU: {
    type: String,
    required: true,
  },

  nameEN: {
    type: String,
    required: true,
  },
}, { versionKey: false });

module.exports = mongoose.model('movie', movieScheme);