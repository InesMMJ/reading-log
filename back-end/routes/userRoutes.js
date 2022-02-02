const userRouter = require("express").Router();
const { userController } = require("../controllers");

userRouter.post("/register", userController.registerNewUser);

userRouter.post("/login", userController.userLogin);

module.exports = userRouter;
