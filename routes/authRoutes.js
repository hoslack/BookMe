const passport = require('passport');
const router = require('express').Router();
require('../services/passport');
const redirectAfterLogin = require('../controllers/redirectAfterLogin');
const logout = require('../controllers/logout');
const getCurrentUser = require('../controllers/getCurrentUser');

router.get(
	'/google',
	passport.authenticate('google', {
		scope: ['profile', 'email'],
	})
);

router.get('/google/callback', passport.authenticate('google'), redirectAfterLogin);

router.get('/logout', logout);

router.get('/user', getCurrentUser);

module.exports = router;
