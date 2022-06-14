const router = require('express').Router();
const userRouter = require('./users.router');
const movieRouter = require('./movies.router');
const { createUser, login } = require('../controllers/users.controller');

router.post('/signup', createUser)
router.post('/signin', login)

router.use('/users', userRouter);
router.use('/movies', movieRouter);

module.exports = router;