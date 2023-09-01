import { Request, Response } from "express";

export const brokerEvent = async (req: Request, res: Response) => {
    try {
      console.log("Recieved events", req.body.type);

      res.send({});
    } catch (err) {
      console.log(err);
      return err;
    }
  };