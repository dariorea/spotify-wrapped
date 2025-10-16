import express from "express";
import { getUser, getUserArtist,
        getUserTracks, getUserGenres,
        getRecentlyPlayed } from "../controllers/user.controller.js";


const router = express.Router()

router.get("/profile", getUser)
router.get("/top", getUserArtist)
router.get("/tracks", getUserTracks)
router.get("/genres", getUserGenres)
router.get("/recently", getRecentlyPlayed)


export default router