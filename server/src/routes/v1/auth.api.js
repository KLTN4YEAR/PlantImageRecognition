// Libs
const express = require('express');
const controllerAuth=require('../../controllers/auth.controller');
const passport = require('passport');
const passportConfig = require('../../config/passport');    //config passport

const auth_api_route = express.Router();

auth_api_route.route('/oauth/google').post(passport.authenticate('googleToken', { session: false }), controllerAuth.OAuth);
auth_api_route.route('/oauth/facebook').post(passport.authenticate('facebookToken', { session: false }), controllerAuth.OAuth);

module.exports = auth_api_route;
