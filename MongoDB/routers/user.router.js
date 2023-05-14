import express from "express";
import User from "../models/user.schema.js";
import { Post } from "../controllers/user.controller.js";

const router = express.Router();


router.post("/", Post)
router.put("/", Post)
router.delete("/", Post)



export default router
