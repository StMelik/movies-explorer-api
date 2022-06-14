const router = require('express').Router();
const userRouter = require('./users.router');
const movieRouter = require('./movies.router');
const { createUser, login } = require('../controllers/users.controller');
const auth = require('../middlewares/auth.middleware')

router.post('/signup', createUser);
router.post('/signin', login);

router.use('/users', auth, userRouter);
router.use('/movies', auth, movieRouter);

module.exports = router;
