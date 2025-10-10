import { getTopSixMonts, getTopTwelveMonths } from "./functions.js";

const btnSixMonths = document.getElementById("btn-sixmonths")
const btnTwelveMonths = document.getElementById("btn-twelvemonths")


btnTwelveMonths.addEventListener("click", getTopTwelveMonths)
btnSixMonths.addEventListener("click", getTopSixMonts)
