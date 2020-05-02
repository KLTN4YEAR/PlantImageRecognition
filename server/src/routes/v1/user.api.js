const express = require('express');
const { controllerUser } = require('../../controllers');
const authMiddleware = require('../../middlewares/auth.middleware');

const user_api_route = express.Router();

user_api_route.route('/getInfo/:_id').get(authMiddleware, controllerUser.getInfo);

module.exports = user_api_route;
