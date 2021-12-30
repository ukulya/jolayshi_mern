import express from "express";
import {driverSignIn, driverSignup} from "../controllers/driverController.js";

const router = express.Router()
router.post("/signin", driverSignIn);
router.post("/signup", driverSignup);


export default router;