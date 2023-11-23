import openConnection from "../database/connection.js";

const loginController = async (req, res) => {
  try {
    const userEmail = req.query.email;
    const conn = await openConnection();
    const query = `SELECT name,email,password FROM signup WHERE email = ?`;
    const [result] = await conn.execute(query, [userEmail]);

    if (!result.length) {
      return res.status(400).send({ message: `Email is not Valid` });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.sqlMessage || "Internal Server Error");
  }
};

export default { loginController };
