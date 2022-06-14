const router = require('express').Router();
const { getUserInfo, updateUserInfo } = require('../controllers/users.controller');
const { validationProfile } = require('../utils/validation')

router.get('/me', getUserInfo);
router.patch('/me', validationProfile, updateUserInfo);

module.exports = router;
