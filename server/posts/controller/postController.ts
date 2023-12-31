import { Request, Response } from "express";
import { randomBytes } from "crypto";
import { broker_URL } from "../event";
import axios from "axios";

type Posts = {
  id: string;
  title: string;
};
const Posts: Record<string, Posts> = {};

export const createPost = async (req: Request, res: Response) => {
  try {
    const id = randomBytes(4).toString("hex");
    const { title } = req.body;
    const newPost: Posts = {
      id,
      title,
    };
    Posts[id] = newPost;

    await axios.post(broker_URL, {
      type: "PostCreated",
      data: {
        id,
        title,
      },
    });

    res.status(201).send(newPost);
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    res.status(201).send(Posts);
  } catch (err) {
    console.log(err);
    return err;
  }
};
