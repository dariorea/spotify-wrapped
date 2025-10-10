const loginButton = document.getElementById("login");
const tracksContainer = document.getElementById("tracks");

loginButton.addEventListener("click", () => {
  window.location.href = "http://localhost:3000/login";
});

// Captura el parámetro `code` cuando Spotify redirige
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if (code) {
  // Intercambiamos el code por un token
    fetch("http://localhost:3000/callback.html", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code }),
})
//    .then(res => res.json())
//    .then(data => {
//        const accessToken = data.access_token;
//        console.log("Token:", accessToken);

      // Pedimos las canciones más escuchadas del usuario
//      return fetch("http://127.0.0.1:3000/top-tracks", {
//        headers: { Authorization: `Bearer ${accessToken}` },
//      });
//    })
//    .then(res => res.json())
//    .then(data => {
//      console.log("Top tracks:", data);
//      showTracks(data.items);
//    })
//    .catch(err => console.error(err));
//}
//
//function showTracks(tracks) {
//  tracksContainer.innerHTML = "";
//  tracks.forEach(track => {
//    const div = document.createElement("div");
//    div.classList.add("track");
//    div.innerHTML = `
//      <img src="${track.album.images[0].url}" alt="${track.name}">
//      <p><strong>${track.name}</strong></p>
//      <p>${track.artists.map(a => a.name).join(", ")}</p>
//    `;
//    tracksContainer.appendChild(div);
//  
//});
}
