import express from "express";
const router = express.Router();

import { registerAdmin } from "../Controllers/registerAdminController.js";
import { adminLogin } from "../Controllers/adminLoginController.js";
import { addRoom } from "../Controllers/addConferenceRoomController.js";
import { getAllRooms } from "../Controllers/getAllRoomsController.js";
import { deleteRoom } from "../Controllers/deleteRoomController.js";

router.post("/register", registerAdmin);
router.post("/login", adminLogin);
router.post("/add-conference-room", addRoom);
router.get("/get-all-rooms", getAllRooms);
router.delete("/delete-rooms", deleteRoom);
// router.post("/logout", logout);

export default router;
