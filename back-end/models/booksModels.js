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
  let results;
  let sql = "SELECT * FROM books ";
  try {
    if (admin) {
      results = await connection.query(sql);
    } else {
      sql += "WHERE user_id=?;";
      results = await connection.query(sql, [user_id]);
    }
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
