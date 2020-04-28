// Libs
const AuthService = require('../services/auth.service').User;
const db = require('../db');
const jwt = require('../helpers/jwt.helper');
const config = require('../config');

const OAuth = async (req, res) => {

  let userData = { _id: req.user._id };

  let token = await jwt.generateToken(userData, config.jwtSecret, config.tokenLife);

  return res.status(200).json({
    message: "login success",
    result: {
      user: { _id: req.user.id, avatar: req.user.avatar, fullName: req.user.fullName },
      token: token
    }
  });
}

module.exports = {
  OAuth
};
