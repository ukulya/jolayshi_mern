import express from "express";
const router = express.Router();

import { userSignin } from "../controllers/userController.js";

router.post("/signin", userSignin);

export default router;