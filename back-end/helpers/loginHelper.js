const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const saltRounds = parseInt(process.env.SALT_ROUNDS);

const validateUser = (data) => {
  return Joi.object({
    name: Joi.string().max(50).required(),
    email: Joi.string().email().max(80).required(),
    password: Joi.string()
      .regex(new RegExp("^[A-Za-z0-9-_.*#&!?$%@]+$"))
      .min(8)
      .max(20)
      .messages({
        "string.pattern.base":
          "Only letters, numbers and special characters @, &, !, ?, ., -, *, #, $, %, _ allowed",
      }),
  }).validate(data, { abortEarly: false }).error;
};

const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
  } catch (err) {
    throw Error;
  }
};

const verifyPassword = async (password, hashedPassword) => {
  let matchFound;
  try {
    matchFound = await bcrypt.compare(password, hashedPassword);
    if (!matchFound) return false;
    else return matchFound;
  } catch (err) {
    console.log(err);
    throw Error;
  }
};

const calculateToken = (id) => {
  const token = process.env.TOKEN_SECRET;
  return jwt.sign(id, token, { expiresIn: "18020000" });
};

module.exports = {
  validateUser,
  verifyPassword,
  hashPassword,
  calculateToken,
};
