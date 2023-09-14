import { Router } from "express";
import { validateSchema } from "../middlewares/validatorSchema.js";
import { authSchema } from "../schemas/auth.schema.js";
import { isTokenValid, login, registerAuth } from "../controllers/auth.controller.js"; 
import { verifyToken } from "../middlewares/validateToken.js";

const authRouter = Router();

authRouter.post("/login", validateSchema(authSchema) , login)
authRouter.post("/register", validateSchema(authSchema) , registerAuth)
authRouter.get("/refresh", verifyToken, isTokenValid)

export default authRouter;