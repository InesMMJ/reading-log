require("dotenv").config();
const jwt = require("jsonwebtoken");

const TOKEN = process.env.TOKEN_SECRET;

const validateToken = async (req, res, next) => {
  let match;
  const { user_token } = req.cookies;
  try {
    if (!user_token) {
      res.clearCookie("loggedIn");
      throw new Error("NOT_AUTHENTICATED");
    }
    match = jwt.verify(user_token, TOKEN);
    if (!match) throw new Error("INVALID_CREDENTIALS");
    req.user_id = match.user_id;
  } catch (err) {
    next(err);
  }
};

module.exports = { validateToken };
