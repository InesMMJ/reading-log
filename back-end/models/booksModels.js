const connection = require("../config/config-db");

const postBook = async ({ ...body }, user_id) => {
  try {
    const [{ insertId }] = await connection.query("INSERT INTO books SET ?", {
      ...body,
      user_id,
    });
    return { id: insertId, ...body };
  } catch (err) {
    throw Error;
  }
};

const getBookById = async (id) => {
  try {
    const [results] = await connection.query("SELECT * FROM books WHERE id=?", [
      id,
    ]);
    return results[0];
  } catch {
    throw Error;
  }
};

const getAllBooks = async (user_id) => {
  try {
    const [results] = await connection.query(
      "SELECT * FROM books WHERE user_id=?",
      [user_id]
    );
    return results;
  } catch (err) {
    throw Error;
  }
};

const deleteBook = async (id) => {
  try {
    const [results] = await connection.query("DELETE FROM books WHERE id=?", [
      id,
    ]);
    return results.affectedRows;
  } catch (err) {
    throw Error;
  }
};

module.exports = {
  getAllBooks,
  deleteBook,
  postBook,
  getBookById,
};
