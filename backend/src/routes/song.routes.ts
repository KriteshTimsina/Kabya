import { Router } from "express";
import { addSong, getAllSong } from "../controllers/song.controller";

const router = Router();

//song
router.post("/", addSong);
router.get("/", getAllSong);

export default router;
