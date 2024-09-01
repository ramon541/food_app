const bcrypt = require("bcrypt");
const connection = require("./connection");

//================================================================
const login = async (user) => {
  const { email, password } = user;

  const query = `
    SELECT * FROM PESSOAS
        WHERE email = ?;
  `;
  const returnedUser = await connection.execute(query, [email]);
  if (returnedUser[0].length == 0) return null;
  const encryptedPassword = returnedUser[0][0].senha;

  const passwordIsValid = await bcrypt.compare(password, encryptedPassword);
  if (!passwordIsValid) return null;
  return returnedUser[0];
};

//================================================================
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

//================================================================
const cadastrar = async (user) => {
  const { Fname, Lname, email, password } = user;

  const queryVerifyEmail = `
    SELECT email from PESSOAS
      where email = ?;
  `;
  const emailExists = await connection.execute(queryVerifyEmail, [email]);

  if (emailExists[0].length > 0) return null;

  const encryptedPassword = await hashPassword(password);
  const queryInsertUser = `
    INSERT INTO PESSOAS (Fname, Lname, email, senha)
      VALUES (?, ?, ?, ?);
  `;
  const IDuser = await connection.execute(queryInsertUser, [
    Fname,
    Lname,
    email,
    encryptedPassword,
  ]);

  return IDuser[0].insertId;
};

//================================================================

//------------- Exports -------------
module.exports = {
  login,
  cadastrar,
};
