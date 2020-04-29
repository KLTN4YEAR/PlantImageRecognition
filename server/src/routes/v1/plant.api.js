const express = require('express');
const { controllerPlant } = require('../../controllers');
const authMiddleware = require('../../middlewares/auth.middleware');

const plant_api_route = express.Router();

plant_api_route.route('/searchPlant').post(controllerPlant.searchPlant);

module.exports = plant_api_route;
