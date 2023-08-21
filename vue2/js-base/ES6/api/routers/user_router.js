import express from "express";
import { getUser } from "../controller/user_corl.js";
const router = new express.Router();
router.get("/user", getUser);
export default router;
