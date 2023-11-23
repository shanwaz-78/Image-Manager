import openConnection from "../database/connection.js";
import * as bcrypt from "bcrypt";

const signUpController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    const conn = await openConnection();
    const query = `INSERT INTO signup (name,email,password) VALUES (?,?,?)`;
    const [rows] = await conn.execute(query, [name, email, encryptedPassword]);
    return rows;
  } catch (error) {
    throw new Error(error.sqlMessage);
  }
};

export default { signUpController };
