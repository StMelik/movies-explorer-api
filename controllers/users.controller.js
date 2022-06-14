const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { secretKey } = require('../utils/constants')

const getUserInfo = (req, res) => {
  const userId = req.user._id

  User.findById(userId)
    .then(user => {
      res.send(user)
    })
    .catch(err => console.log(err))
};

const patchUserInfo = (req, res) => {
  const userId = req.user._id
  const { email, name } = req.body

  User.findByIdAndUpdate(userId, { email, name }, { new: true, runValidators: true })
    .then(user => {
      res.send(user)
    })
    .catch(err => console.log(err))
};

const createUser = (req, res) => {
  const { email, password, name } = req.body;

  bcrypt.hash(password, 10)
    .then(hash => User.create({
      email,
      password: hash,
      name
    }))
    .then(user => {
      res.send({
        email: user.email,
        name: user.name,
      })
    })
    .catch(err => console.log(err))
};

const login = (req, res) => {
  const { email, password } = req.body;

  User.findUserByCredentials(email, password)
    .then(user => {
      const token = jwt.sign(
        { _id: user._id },
        secretKey,
        { expiresIn: '7d' },
      )

      res.send({ token })
    })
    .catch(err => console.log(err))
};

module.exports = {
  getUserInfo,
  patchUserInfo,
  createUser,
  login,
};