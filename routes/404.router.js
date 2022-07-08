const NotFoundError = require('../utils/errors/NotFound');
const { ERRORS } = require('../utils/constants');

module.exports = (req, res, next) => {
  next(new NotFoundError(ERRORS.INCORRECT_REQUEST));
};
