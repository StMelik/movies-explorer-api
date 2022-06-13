const router = require('express').Router();
const { getUserInfo, patchUserInfo } = require('../controllers/users.controller');

router.get('/me', getUserInfo);
router.patch('/me', patchUserInfo);

module.exports = router;