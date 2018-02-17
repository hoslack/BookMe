const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});
passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.googleClientID,
			clientSecret: process.env.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true,
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ googleID: profile.id });
			if (existingUser) {
				return done(null, existingUser);
			} else {
				const user = await new User({
					googleID: profile.id,
					username: profile.displayName,
					avatar: profile._json.image.url,
				}).save();

				done(null, user);
			}
		}
	)
);
