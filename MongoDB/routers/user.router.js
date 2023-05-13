import express from "express";
import User from "../models/user.schema";
import mongoose from "mongoose";

const router = express.Router();

export function UserRouter(){

  router.post("/", async (req, res) => {
      const data = req.body;
      const newData = await new User(data)
      const saveData = newData.save()
      console.log(saveData);
      res.json(saveData);
    });
}
