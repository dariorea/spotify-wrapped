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
            let count = 0;
            container.innerHTML = "";
            if (data.items.length === 0) {
                container.innerHTML = "<p>No se encontraron canciones top. Escuchá música primero 🎵</p>";
            } else {
                data.items.forEach(track => {
                    const div = document.createElement("div");
                    div.classList.add("card")
                    const number = document.createElement("p")
                    number.textContent = count += 1;
                    const img = document.createElement("img")
                    img.src = `${track.album.images[0].url}`
                    img.alt = `${track.name}`
                    const textCard = document.createElement("div")
                    textCard.classList.add("card-text")
                    const nameSong = document.createElement("p")
                    nameSong.textContent = `${track.name}`;
                    const nameArtist = document.createElement("h4")
                    track.artists.forEach( a => {
                        nameArtist.textContent = a.name;
                    })
                    const linkSpotify = document.createElement("a")
                    linkSpotify.innerHTML = `<a href="${track.external_urls.spotify}"><i class="bi bi-spotify"></i></a>`
                    
                    textCard.append(nameSong, nameArtist, linkSpotify)
                    div.append(number, img, textCard)
                    container.appendChild(div);
                    document.querySelector(".card-container-tracks").style.display = "flex";
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
            let count = 0;
            container.innerHTML = "";
            if (data.items.length === 0) {
                container.innerHTML = "<p>No se encontraron canciones top. Escuchá música primero 🎵</p>";
            } else {
                data.items.forEach(track => {
                    const div = document.createElement("div");
                    div.classList.add("card")
                    const number = document.createElement("p")
                    number.textContent = count += 1;
                    const img = document.createElement("img")
                    img.src = `${track.album.images[0].url}`
                    img.alt = `${track.name}`
                    const textCard = document.createElement("div")
                    textCard.classList.add("card-text")
                    const nameSong = document.createElement("p")
                    nameSong.textContent = `${track.name}`;
                    const nameArtist = document.createElement("h4")
                    track.artists.forEach( a => {
                        nameArtist.textContent = a.name;
                    })
                    const linkSpotify = document.createElement("a")
                    linkSpotify.innerHTML = `<a href="${track.external_urls.spotify}"><i class="bi bi-spotify"></i></a>`
                    
                    textCard.append(nameSong, nameArtist, linkSpotify)
                    div.append(number, img, textCard)
                    container.appendChild(div);
                    document.querySelector(".card-container-tracks").style.display = "flex";
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
            let count = 0;
            container.innerHTML = "";
            if (data.items.length === 0) {
                container.innerHTML = "<p>No se encontraron canciones top. Escuchá música primero 🎵</p>";
            } else {
                data.items.forEach(track => {
                    const div = document.createElement("div");
                    div.classList.add("card")
                    const number = document.createElement("p")
                    number.textContent = count += 1;
                    const img = document.createElement("img")
                    img.src = `${track.album.images[0].url}`
                    img.alt = `${track.name}`
                    const textCard = document.createElement("div")
                    textCard.classList.add("card-text")
                    const nameSong = document.createElement("p")
                    nameSong.textContent = `${track.name}`;
                    const nameArtist = document.createElement("h4")
                    track.artists.forEach( a => {
                        nameArtist.textContent = a.name;
                    })
                    const linkSpotify = document.createElement("a")
                    linkSpotify.innerHTML = `<a href="${track.external_urls.spotify}"><i class="bi bi-spotify"></i></a>`
                    
                    textCard.append(nameSong, nameArtist, linkSpotify)
                    div.append(number, img, textCard)
                    container.appendChild(div);
                    document.querySelector(".card-container-tracks").style.display = "flex";
                });
            }
        })
    .catch(err => console.error(err));
    } else {
        console.log("No hay token, volvé a login");
    }
}

