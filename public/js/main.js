const token = localStorage.getItem("spotify_token");
import { getTopFourWeeks, getTopSixMonts, getTopTwelveMonths } from "./functions.js";
import { getUserData, 
        getUserTopArtist,
        getUserTopTracks,
        getUserTopGenres, 
        getUserRecentlyTracks,
        getPlaylist, getFollowing } from "./user.js";

const btnFourWeeks = document.getElementById("btn-fourweeks")
const btnSixMonths = document.getElementById("btn-sixmonths")
const btnTwelveMonths = document.getElementById("btn-twelvemonths")


btnFourWeeks.addEventListener("click", () => {getTopFourWeeks(token)})
btnTwelveMonths.addEventListener("click", () => {getTopTwelveMonths(token)})
btnSixMonths.addEventListener("click", () => {getTopSixMonts(token)} )

getUserData(token)
getUserTopArtist(token)
getUserTopTracks(token)
getUserTopGenres(token)
getUserRecentlyTracks(token)
getPlaylist(token)
getFollowing(token)