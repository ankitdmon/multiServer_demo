import express from "express";
const router = express.Router();
import * as postsController from "../controller/postController";

router.post("/createPost", postsController.createPost);
//router.get("/getAllPosts", postsController.getAllPosts);

export default router;
