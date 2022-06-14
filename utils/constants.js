const { NODE_ENV, JWT_SECRET } = process.env;

const ERRORS = {
  DEFAULT: 'Произошла ошибка.',
  AUTH: 'Необходима авторизация',

  MOVIE: {
    INCORRECT: 'Переданы некорректные данные при сохранении фильма.',
    FOUND: 'Фильм не найден.',
    PERMISSIONS: 'У вас недостаточно прав доступа.',
    ID: 'Передан некорректный id фильма.',
  },

  USER: {
    FOUND: 'Пользователь не найден.',
    ID: 'Передан некорректный id пользователя.',
    INCORRECT_UPDATE: 'Переданы некорректные данные при обновлении профиля.',
    INCORRECT_CREATE: 'Переданы некорректные данные при создании пользователя.',
    INCORRECT_LOGIN: 'Переданы некорректные данные при входе.',
    EXISTS: 'Такой пользователь уже существует!',
    AUTH: 'Неправильные почта или пароль',
  },
};

const secretKey = NODE_ENV === 'production' ? JWT_SECRET : 'secret-key';

const regExpLink = /(https?:\/\/)(w{3}\.)?(((\d{1,3}\.){3}\d{1,3})|((\w-?)+\.(ru|com)))(:\d{2,5})?((\/.+)+)?\/?#?/;

module.exports = {
  secretKey,
  ERRORS,
  regExpLink,
};
