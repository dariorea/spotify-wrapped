import express from "express";
import { getTopTenArtist, getTopTracksTwelve, getTopTracksSix, getTopTracksFour } from "../controllers/top.controller.js";

const router = express.Router()


router.get("/argentina", getTopTenArtist)
router.get("/top-twelve", getTopTracksTwelve)
router.get("/top-six", getTopTracksSix)
router.get("/top-four", getTopTracksFour)

export default router