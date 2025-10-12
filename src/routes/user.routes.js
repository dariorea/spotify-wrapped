import express from "express";
import { getUser, getUserArtist, getUserTracks } from "../controllers/user.controller.js";


const router = express.Router()

router.get("/profile", getUser)
router.get("/top", getUserArtist)
router.get("/tracks", getUserTracks)


export default router