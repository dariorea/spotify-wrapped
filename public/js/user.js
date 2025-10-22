export const baseUrl = (["localhost", "127.0.0.1"].includes(window.location.hostname))
? "http://127.0.0.1:3000"
: "https://spotify-stats-g23p.onrender.com";

export const getUserData = (token) => {
    if (token) {
        fetch(`${baseUrl}/user/profile`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data); // mirá qué llega en consola
            const container = document.getElementById("profile");
            container.innerHTML = "";
        
            // Verificamos si llegó bien el objeto (por ejemplo si tiene nombre o id)
            if (!data || !data.display_name) {
                container.innerHTML = "<p>No se pudo cargar el perfil del usuario 😢</p>";
            } else {
                const div = document.createElement("div");
                div.classList.add("profile-card");
                div.innerHTML = `
                    <img src="${data.images?.[0]?.url || './images/default-avatar.png'}" width="100" alt="Foto de perfil">
                    <h1>${data.display_name}</h1>
                    <p>Seguidores: ${data.followers?.total || 0}</p>
                    <a href="${data.external_urls?.spotify}" target="_blank"><i class="bi bi-spotify"></i></a>
                `;
                container.appendChild(div);
            }
        })
        
    .catch(err => console.error(err));
    } else {
        console.log("No hay token, volvé a login");
    }
}

export const getUserTopArtist = (token) => {
    if (token) {
        fetch(`${baseUrl}/user/top`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById("top-artist")
            console.log(data)
            data.items.forEach(element => {
                const div = document.createElement("div")
                div.classList.add("top-card")
                const img = document.createElement("img")
                img.src = `${element.images?.[0]?.url }`
                img.alt = element.name
                const name = document.createElement("p")
                name.textContent = element.name
                div.append(img, name)
                container.appendChild(div)
            });
        })
    }
}
export const getUserTopTracks = (token) => {
    if (token) {
        fetch(`${baseUrl}/user/tracks`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById("top-tracks")
            console.log(data)
            data.items.forEach(element => {
                const div = document.createElement("div")
                div.classList.add("top-card")
                const img = document.createElement("img")
                img.src = `${element.album.images?.[0]?.url }`
                img.alt = element.name
                const name = document.createElement("p")
                name.textContent = element.name
                div.append(img, name)
                container.appendChild(div)
            });
        })
    }
}

export const getUserTopGenres = (token) => {
    const containerTop = document.getElementById("top-genres");
    if (token) {
        fetch(`${baseUrl}/user/genres`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => {
            if (!res.ok) throw new Error("Error al obtener géneros");
            return res.json();
        })
        .then(genres => {
            console.log("generos" + genres); // acá sí tenés los datos reales
            
            genres.slice(0, 5).forEach(g => {
                const div = document.createElement("div");
                div.classList.add("top-card")
                const p = document.createElement("p")
                p.textContent = `${g.genre}`;
                div.appendChild(p);
                containerTop.appendChild(div)
            });
        })
        .catch(err => {
            console.error("Error:", err);
        });
    } else {
        console.warn("No hay token disponible");
    }
};

export const getUserRecentlyTracks = (token) => {
    if (token) {
        fetch(`${baseUrl}/user/recently`, {
            headers: { Authorization: `Bearer ${token}`},
        })
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById("recently-tracks")
            console.log(data)
            data.items.forEach(element => {
                const div = document.createElement("div")
                div.classList.add("card")
                const img = document.createElement("img")
                img.src = `${element.track.album.images?.[0]?.url }`
                img.alt = element.name;
                const name = document.createElement("p")
                element.track.artists.forEach(artista => {
                    name.textContent = `${artista.name} - ${element.track.name}`    
                })
                
                div.append(img, name)
                container.appendChild(div)
            });
        })
    }
}
export const getPlaylist = (token) => {
    if (token) {
        fetch(`${baseUrl}/user/playlist`, {
            headers: { Authorization: `Bearer ${token}`},
        })
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById("playlist")
            console.log(data)
            data.items.forEach(element => {
                const div = document.createElement("div")
                div.classList.add("card")
                const img = document.createElement("img")
                img.src = `${element.images?.[0]?.url }`
                img.alt = element.name
                const name = document.createElement("p")
                name.textContent = `${element.name}`    
        
                
                div.append(img, name)
                container.appendChild(div)
            });
        })
    }
}

export const getFollowing = (token) => {
    if (token) {
        fetch(`${baseUrl}/user/following`, {
            headers: { Authorization: `Bearer ${token}`},
        })
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById("following")
            console.log(data)
            data.artists.items.forEach(element => {
                const div = document.createElement("div")
                div.classList.add("card")
                const img = document.createElement("img")
                img.src = `${element.images?.[0]?.url || './pngegg(7).png'}`
                img.alt = element.name
                const name = document.createElement("p")
                name.textContent = `${element.name}`    

                div.append(img, name)
                container.appendChild(div)
            });
        })
    }
}