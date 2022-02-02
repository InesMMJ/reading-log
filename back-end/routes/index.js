const apiRouter = require("express").Router();
const userRouter = require("./userRoutes");
const booksRouter = require("./booksRoutes");

apiRouter.use("/users", userRouter);
apiRouter.use("/books", booksRouter);

module.exports = apiRouter;
