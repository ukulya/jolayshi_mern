import express from "express";
const router = express.Router();

import {passengerSignIn, passengerSignup,getPassenger} from "../controllers/passengerController.js";

router.post("/signup", passengerSignup);
router.post("/signin", passengerSignIn);
router.get("/:id", getPassenger);

export default router;