import { getTopFourWeeks, getTopSixMonts, getTopTwelveMonths } from "./functions.js";
import { getUserData, 
        getUserTopArtist,
        getUserTopTracks,
        getUserTopGenres, 
        getUserRecentlyTracks,
        getPlaylist,
        getFollowing} from "./user.js";

const btnFourWeeks = document.getElementById("btn-fourweeks")
const btnSixMonths = document.getElementById("btn-sixmonths")
const btnTwelveMonths = document.getElementById("btn-twelvemonths")


btnFourWeeks.addEventListener("click", getTopFourWeeks)
btnTwelveMonths.addEventListener("click", getTopTwelveMonths)
btnSixMonths.addEventListener("click", getTopSixMonts)

getUserData()
getUserTopArtist()
getUserTopTracks()
getUserTopGenres()
getUserRecentlyTracks()
getPlaylist()
getFollowing()