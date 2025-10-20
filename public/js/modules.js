export const createCardTracks = (info) => {
    const container = document.getElementById("tracks");
    let count = 0;
    container.innerHTML = "";

    info.forEach(track => {
        const div = document.createElement("div");
        div.classList.add("card-tracks")
        const number = document.createElement("p")
        number.textContent = count += 1;
        const img = document.createElement("img")
        img.src = `${track.album.images[0].url}`
        img.alt = `${track.name}`
        const textCard = document.createElement("div")
        textCard.classList.add("card-tracks__text")
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
        document.querySelector(".container-tracks").style.display = "flex";
    });
}