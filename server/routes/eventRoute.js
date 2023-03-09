import express from "express"
import { createEvent, deleteAnEvent, editAnEvent, getAllEvent, getAnEvent } from "../controllers/eventController.js"


const router=express.Router()

router.post("/", createEvent);
router.get("/", getAllEvent);
router.get("/:id", getAnEvent);
router.delete("/:id", deleteAnEvent);
router.put("/:id", editAnEvent);

export default router;