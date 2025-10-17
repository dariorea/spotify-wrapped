import express from "express";
import { getUser, getUserArtist,
        getUserTracks, getUserGenres,
        getRecentlyPlayed, getUserPlaylist, getUserFollowing } from "../controllers/user.controller.js";


const router = express.Router()

router.get("/profile", getUser)
router.get("/top", getUserArtist)
router.get("/tracks", getUserTracks)
router.get("/genres", getUserGenres)
router.get("/recently", getRecentlyPlayed)
router.get("/playlist", getUserPlaylist)
router.get("/following", getUserFollowing)


export default router