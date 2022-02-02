const connection = require("../config/config-db");
const { loginHelper } = require("../helpers");

const getUserByEmail = async (email) => {
  try {
    let [results] = await connection.query(
      "SELECT * FROM users WHERE email=?;",
      [email]
    );
    return results[0];
  } catch (err) {
    throw Error;
  }
};

const createNewUser = async ({ password, ...body }) => {
  try {
    const hashedPassword = await loginHelper.hashPassword(password);
    const [{ insertId }] = await connection.query("INSERT INTO `users` SET ?", {
      hashedPassword,
      ...body,
    });
    return { id: insertId, ...body };
  } catch (err) {
    throw Error;
  }
};

module.exports = {
  getUserByEmail,
  createNewUser,
};
