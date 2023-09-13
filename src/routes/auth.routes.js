import { Router } from "express";
import { validateSchema } from "../middlewares/validatorSchema.js";
import { authSchema } from "../schemas/auth.schema.js";
import { login, registerAuth } from "../controllers/auth.controller.js"; 

const authRouter = Router();

authRouter.post("/login", validateSchema(authSchema) , login)
authRouter.post("/register", validateSchema(authSchema) , registerAuth)

export default authRouter;