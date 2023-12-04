import express from "express";
import { Login, Register } from "../controllers/userController.js";

const userRouter = express.Router()

// Système de connexion
userRouter.post("/login", Login)

// Système d'inscription
userRouter.post("/register", Register)

export default userRouter