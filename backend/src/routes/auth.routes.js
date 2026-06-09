const express = require('express');
const router = express.Router();
const { register, login, getMe, registerUser, loginUser, logoutUser } = require('../controllers/auth.controllers');
const protect = require('../middleware/middleware');

router.post('/register', registerUser);
router.post('/login',    loginUser);
router.post('/logout', logoutUser);

module.exports = router;