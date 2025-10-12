export const getTopFourWeeks = () => {

    const token = localStorage.getItem("spotify_token");
  
    if (token) {
        fetch("http://127.0.0.1:3000/track/top-four", {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => res.json())
        .then(data => {
            console.log("Top tracks:", data); // <--- mirá qué llega
            const container = document.getElementById("tracks");
            container.innerHTML = "";
            if (data.items.length === 0) {
                container.innerHTML = "<p>No se encontraron canciones top. Escuchá música primero 🎵</p>";
            } else {
                data.items.forEach(track => {
                    const div = document.createElement("div");
                    div.classList.add("card")
                    div.innerHTML = `
                        <img src="${track.album.images[0].url}" width="100">
                        <p>${track.name} - ${track.artists.map(a => a.name).join(", ")}</p>
                        <a href="${track.external_urls.spotify}"> escuchala ahora </a>
                    `;
                    container.appendChild(div);
                });
            }
        })
    .catch(err => console.error(err));
    } else {
        console.log("No hay token, volvé a login");
    }
}


export const getTopTwelveMonths = () => {

    const token = localStorage.getItem("spotify_token");
  
    if (token) {
        fetch("http://127.0.0.1:3000/track/top-twelve", {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => res.json())
        .then(data => {
            console.log("Top tracks:", data); // <--- mirá qué llega
            const container = document.getElementById("tracks");
            container.innerHTML = "";
            if (data.items.length === 0) {
                container.innerHTML = "<p>No se encontraron canciones top. Escuchá música primero 🎵</p>";
            } else {
                data.items.forEach(track => {
                    const div = document.createElement("div");
                    div.classList.add("card")
                    div.innerHTML = `
                        <img src="${track.album.images[0].url}" width="100">
                        <p>${track.name} - ${track.artists.map(a => a.name).join(", ")}</p>
                        <a href="${track.external_urls.spotify}"> escuchala ahora </a>
                    `;
                    container.appendChild(div);
                });
            }
        })
    .catch(err => console.error(err));
    } else {
        console.log("No hay token, volvé a login");
    }
}
export const getTopSixMonts = () => {

    const token = localStorage.getItem("spotify_token");
  
    if (token) {
        fetch("http://127.0.0.1:3000/track/top-six", {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => res.json())
        .then(data => {
            console.log("Top tracks:", data); // <--- mirá qué llega
            const container = document.getElementById("tracks");
            container.innerHTML = "";
            if (data.items.length === 0) {
                container.innerHTML = "<p>No se encontraron canciones top. Escuchá música primero 🎵</p>";
            } else {
                data.items.forEach(track => {
                    const div = document.createElement("div");
                    div.classList.add("card")
                    div.innerHTML = `
                        <img src="${track.album.images[0].url}" width="100">
                        <p>${track.name} - ${track.artists.map(a => a.name).join(", ")}</p>
                        <a href="${track.external_urls.spotify}"> escuchala ahora </a>
                    `;
                    container.appendChild(div);
                });
            }
        })
    .catch(err => console.error(err));
    } else {
        console.log("No hay token, volvé a login");
    }
}

