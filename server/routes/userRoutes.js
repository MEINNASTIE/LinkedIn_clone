import express from "express";
import { handleLogin, handleRegister,handlegetusers,handleUpdateProfile } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.post("/register", handleRegister);
userRoutes.post("/", handleLogin);
userRoutes.get("/getallusers",handlegetusers)
userRoutes.put('/updateProfile/:userId', handleUpdateProfile);

export default userRoutes;