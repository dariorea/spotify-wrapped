import { createCardTracks } from "./modules.js";
import { baseUrl } from "./user.js";


export const getTopFourWeeks = (token) => {
    if (token) {
        fetch(`${baseUrl}/track/top-four`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => res.json())
        .then(data => {
            const info = data.items;
            if (info.length === 0) {
                container.innerHTML = "<p>No se encontraron canciones top. Escuchá música primero 🎵</p>";
            } else {
                createCardTracks(info)
            }
        })
    .catch(err => console.error(err));
    } else {
        console.log("No hay token, volvé a login");
    }
}
export const getTopTwelveMonths = (token) => {
    if (token) {
        fetch(`${baseUrl}/track/top-twelve`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => res.json())
        .then(data => {
            const info = data.items
            if (info.length === 0) {
                container.innerHTML = "<p>No se encontraron canciones top. Escuchá música primero 🎵</p>";
            } else {
                createCardTracks(info)
            }
        })
    .catch(err => console.error(err));
    } else {
        console.log("No hay token, volvé a login");
    }
}
export const getTopSixMonts = (token) => {
    if (token) {
        fetch(`${baseUrl}/track/top-six`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => res.json())
        .then(data => {
            const info = data.items
            if (info.length === 0) {
                container.innerHTML = "<p>No se encontraron canciones top. Escuchá música primero 🎵</p>";
            } else {
                createCardTracks(info)
            }
        })
    .catch(err => console.error(err));
    } else {
        console.log("No hay token, volvé a login");
    }
}
