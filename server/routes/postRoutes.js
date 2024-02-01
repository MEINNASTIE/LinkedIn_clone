import express from "express";
import uploadCloud from "../middlewares/multercloudinary.js";
import {handlegetposts,handlecreate,handledelete} from "../controllers/postcontroller.js"


const postRoutes = express.Router();

// GET POSTS *****************


postRoutes.get("/",handlegetposts)
postRoutes.post("/create",uploadCloud.single("post-image"),handlecreate)
postRoutes.delete("/delete/:postId",handledelete)



export default postRoutes;