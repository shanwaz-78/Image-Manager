import "dotenv/config";
import express from "express";
import http from "http";
import cors from "cors";
import multer from "multer";
import bodyParser from "body-parser";
import routes from "./routes/index.js";

const port = process.env.PORT || "8001";
const app = express();

// both body parser
app.use(cors({ origin: "*" }));
// middleware
const upload = multer();
app.use(upload.single("image"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/sign-up", routes.signUpRoutes);
app.use("/login/", routes.loginRoutes);
app.use("/upload-image", routes.uploadImageRoutes);

const server = http.createServer(app);
server.listen(port);

server.on("listening", () =>
  console.log(`server is listening at http://localhost${port}`)
);
server.on("error", () => console.log("server is not listening"));
