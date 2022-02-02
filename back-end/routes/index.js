const apiRouter = require("express").Router();
const userRouter = require("./userRoutes");
const booksRouter = require("./booksRoutes");

apiRouter.use("/user", userRouter);
apiRouter.use("/books", booksRouter);

module.exports = apiRouter;
