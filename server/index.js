import express from "express";
import morgan from "morgan";
import connectDB from "./config/mongo-db.js";
import {port} from "./config/env-vars.js"
import cors from 'cors';
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
const app = express();
connectDB();
app.use(express.json());

app.use(morgan('dev'));
app.use(cors({ origin: "http://localhost:5173" }));

app.use("/user", userRoutes);
app.use("/post",postRoutes)




app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
  });