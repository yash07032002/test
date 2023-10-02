const express = require('express');
const router = express.Router();
const users = require('./controller')

router.route('/register')
        .post(users.register);

router.route('/profile')
        .get(users.getprofile);

module.exports = router;