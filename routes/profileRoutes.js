const express = require('express');
const router = express.Router();
const controller = require('../controllers/profileController');
const authenticateToken = require('../middleware/auth');

router.get('/', authenticateToken, controller.getUserProfile);

module.exports = router;
