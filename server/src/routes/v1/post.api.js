const express = require('express');
const { controllerPost } = require('../../controllers');
const authMiddleware = require('../../middlewares/auth.middleware');

const post_api_route = express.Router();

post_api_route.route('/getInfoPost/:_id').get(authMiddleware.checkAuthor, controllerPost.getInfoPost);
post_api_route.route('/create').post(authMiddleware.checkAuthor, controllerPost.multerMid, controllerPost.createPost);

module.exports = post_api_route;