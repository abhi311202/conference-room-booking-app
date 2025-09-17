import express from "express";
import { registerUser } from "../Controllers/registerUserController.js";
import { loginUser } from "../Controllers/loginUserController.js";
import { bookSlot } from "../Controllers/bookSlotController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// Book a slot for a room
router.post("/book/:roomId", bookSlot);

export default router;
