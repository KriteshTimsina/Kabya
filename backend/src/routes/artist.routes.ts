import { Router } from "express";
import {
  addArtist,
  deleteArtist,
  getAllArtists,
  updateArtist,
} from "../controllers/artist.controller";

const router = Router();

//artist
router.get("/", getAllArtists);
router.post("/", addArtist);
router.put("/:id", updateArtist);
router.delete("/:id", deleteArtist);

export default router;
