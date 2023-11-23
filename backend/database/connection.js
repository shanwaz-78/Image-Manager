import { createConnection } from "mysql2/promise";

const openConnection = async () => {
  const config = {
    host: "localhost",
    database: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  };
  const conn = await createConnection(config);
  return conn;
};

export default openConnection;
