export const getUserData = () => {
    const token = localStorage.getItem("spotify_token");
  
    if (token) {
        fetch("http://127.0.0.1:3000/user/profile", {
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
                div.classList.add("card");
                div.innerHTML = `
                    <img src="${data.images?.[0]?.url || './images/default-avatar.png'}" width="100" alt="Foto de perfil">
                    <h1>${data.display_name}</h1>
                    <p>ID: ${data.id}</p>
                    <p>Seguidores: ${data.followers?.total || 0}</p>
                    <a href="${data.external_urls?.spotify}" target="_blank">Ver perfil en Spotify</a>
                `;
                container.appendChild(div);
            }
        })
        
    .catch(err => console.error(err));
    } else {
        console.log("No hay token, volvé a login");
    }
}