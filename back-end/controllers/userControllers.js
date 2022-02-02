const { userModel } = require("../models");
const { loginHelper } = require("../helpers");

const cookieSettings = {
  httpOnly: true,
  sameSite: "lax",
};

const registerNewUser = async (req, res, next) => {
  try {
    const validationErrors = loginHelper.validateUser(req.body);
    if (validationErrors) {
      req.validationErrors = validationErrors;
      throw new Error("INVALID_DATA");
    }
    const user = await userModel.getUserByEmail(req.body.email);
    if (user) throw new Error("EXISTING_EMAIL");
    await userModel.createNewUser(req.body);
    res
      .cookie("email", req.body.email, {
        httpOnly: true,
        maxAge: 10800000,
      })
      .status(201)
      .send("User was registered successfully!");
  } catch (err) {
    next(err);
  }
};

const userLogin = async (req, res, next) => {
  let { email, password } = req.body;
  try {
    if (!email || !password) throw new Error("INVALID_CREDENTIALS");
    let user = await userModel.getUserByEmail(email);
    if (!user) throw new Error("NO_USER");
    let match = await loginHelper.verifyPassword(password, user.hashedPassword);
    if (!match) throw new Error("INVALID_CREDENTIALS");
    const token = loginHelper.calculateToken({
      user_id: user.id,
    });
    res
      .cookie("user_token", token, cookieSettings)
      .cookie("loggedIn", true)
      .send("Welcome back!");
  } catch (err) {
    next(err);
  }
};

module.exports = {
  registerNewUser,
  userLogin,
};
