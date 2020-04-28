// Libs
const express = require('express');
const controllerPost=require('../../controllers/post.controller');
const authMiddleware=require('../../middlewares/auth.middleware');

const post_api_route = express.Router();

post_api_route.route('/create').post(authMiddleware,controllerPost.multerMid,controllerPost.createPost);

module.exports = post_api_route;
