import { Router } from "express";
import controllers from "../controllers/index.js";

const route = Router();

route.post("/", controllers.singUpControllers.signUpController);
export default route;
