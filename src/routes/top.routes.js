import express from "express";
import { getTopTenArtist, getTopTracksTwelve, getTopTracksSix } from "../controllers/top.controller.js";

const router = express.Router()


router.get("/argentina", getTopTenArtist)
router.get("/top-twelve", getTopTracksTwelve)
router.get("/top-six", getTopTracksSix)

export default router