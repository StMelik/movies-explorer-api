const ERRORS = {
  DEFAULT: 'Произошла ошибка.',

  MOVIE: {
    INCORRECT: 'Переданы некорректные данные при сохранении фильма.',
    FOUND: 'Фильм не найден.',
    PERMISSIONS: 'У вас недостаточно прав доступа.',
    ID: 'Передан некорректный id фильма.'
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
}

const secretKey = 'secret-key'

module.exports = {
  secretKey,
  ERRORS
}