const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../utils/errors/Unauthorized');
const { ERRORS, secretKey } = require('../utils/constants');

module.exports = (req, _, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    next(new UnauthorizedError(ERRORS.AUTH));
    return;
  }

  const token = authorization.replace('Bearer ', '')

  let payload

  try {
    payload = jwt.verify(token, secretKey)
  } catch (err) {
    next(new UnauthorizedError(ERRORS.AUTH));
    return;
  }

  req.user = payload;

  next()
}