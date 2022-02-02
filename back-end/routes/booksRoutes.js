const booksRouter = require("express").Router();
const { bookController } = require("../controllers");
const { authMiddleware } = require("../middleware");

booksRouter.get("/", authMiddleware.validateToken, bookController.allUserBooks);

booksRouter.get(
  "/:bookId",
  authMiddleware.validateToken,
  bookController.booksById
);

booksRouter.post("/", authMiddleware.validateToken, bookController.addBook);

booksRouter.delete(
  "/:id",
  authMiddleware.validateToken,
  bookController.removeBook
);

module.exports = booksRouter;
