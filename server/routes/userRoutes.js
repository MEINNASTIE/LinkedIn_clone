import express from "express";
import { handleLogin, handleRegister,handlegetusers } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.post("/register", handleRegister);
userRoutes.post("/", handleLogin);
userRoutes.get("/getallusers",handlegetusers)

export default userRoutes;