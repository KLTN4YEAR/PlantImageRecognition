const passport = require('passport');
const GooglePlusTokenStrategy = require('passport-google-plus-token');
const FacebookTokenStrategy = require('passport-facebook-token');
const config = require('./index');
const AuthService = require('../services/auth.service').Users;
const db = require('../db');

// Google OAuth Strategy
passport.use('googleToken', new GooglePlusTokenStrategy({
  clientID: config.oauth.google.clientID,
  clientSecret: config.oauth.google.clientSecret
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const existingUser = await User.findOne({ "google.googleId": profile.id });
    if (existingUser) {
      return done(null, existingUser);
    }

    const formatData = {
      fullName: profile.displayName,
      googleId: profile.id,
      email: profile.emails[0].value,
      avatar: profile.photos[0].value.replace("=s50", "")
    };

    const authService = new AuthService(db, formatData);
    let user = authService.createAccount();
    done(null, user);

  }
  catch (error) {
    console.log(error);
    done(error, false, error.message);
  }
}));

passport.use('facebookToken', new FacebookTokenStrategy({
  clientID: config.oauth.facebook.clientID,
  clientSecret: config.oauth.facebook.clientSecret
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const existingUser = await User.findOne({ "facebook.id": profile.id });
    if (existingUser) {
      return done(null, existingUser);
    }
    const formatData = {
      fullName: profile.displayName,
      facebookId: profile.id,
      email: profile.emails[0].value,
      avatar: profile.photos[0].value
    };

    const authService = new AuthService(db, formatData);
    let user = await authService.createAccount();
    done(null, user);

  }
  catch (error) {
    done(error, false, error.message);
  }
}));