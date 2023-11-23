import { Router } from "express";
import controllers from "../controllers/index.js";

const route = Router();

route.get('/', controllers.loginControllers.loginController);

export default route