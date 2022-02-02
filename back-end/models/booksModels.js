const connection = require("../config/config-db");

const postBook = async () => {
  try {
    const [results] = await connection.query();
  } catch {}
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

const getAllBooks = async (id) => {
  try {
    const [results] = await connection.query(
      "SELECT * FROM books WHERE user_id=?",
      [id]
    );
    return results[0];
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
