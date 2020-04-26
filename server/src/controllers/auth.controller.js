// Libs
const AuthService = require('../services/auth.service').Users;
const db = require('../db');
const jwt=require('../helpers/jwt.helper');
const config=require('../config');

const OAuth = async (req, res) => {

  let userData={_id: req.user._id};

  let token = jwt.generateToken(userData, config.jwtSecret, config.tokenLife);

  return res.json({
    token,
    user: { _id: req.user.id, avatar: req.user.avatar, fullName: req.user.fullName },
  });
}

module.exports = {
  OAuth
};
