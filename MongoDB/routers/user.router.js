import express from "express";
import User from "../models/user.schema.js";
import { Post, Put, Delete, Get, GetId } from "../controllers/user.controller.js";

const router = express.Router();


router.get("/", Get)
router.get("/:id", GetId)
router.post("/:id", Post)
router.put("/:id", Put)
router.delete("/:id", Delete)



export default router
