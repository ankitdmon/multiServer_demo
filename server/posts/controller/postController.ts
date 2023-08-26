import { Request, Response } from "express";

export const createPost = async (req: Request, res: Response) => {
  try {
    return "Post Created!!";
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    return "All Posts!!";
  } catch (err) {
    console.log(err);
    return err;
  }
};
