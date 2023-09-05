import { Router } from "express";
import { addArtist, getAllArtists } from "../controllers/artist.controller";

const router = Router();


//artist
router.post("/",addArtist)
router.get("/",getAllArtists)

export default router;
