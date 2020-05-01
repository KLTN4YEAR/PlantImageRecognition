const express = require('express');
const { controllerUser } = require('../../controllers');
const authMiddleware = require('../../middlewares/auth.middleware');

const post_api_route = express.Router();

post_api_route.route('/getInfo/:_id').get(authMiddleware, controllerUser.getInfo);

module.exports = post_api_route;
