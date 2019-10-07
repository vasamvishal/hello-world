const express = require('express');
const router = express.Router();
const userControl = require('../controllers/user.controller');
const auth = require('../auth/authentication');

router.post('/register', userControl.register);
router.post('/login', userControl.login);
router.post('/forgot',userControl.forgot);
router.post('/reset',auth.checkToken,userControl.reset);

module.exports = router;