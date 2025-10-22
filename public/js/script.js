const loginButton = document.getElementById("login");

// Detecta si estamos en local o producción
const baseUrl = (["localhost", "127.0.0.1"].includes(window.location.hostname))
  ? "http://127.0.0.1:3000"
  : "https://spotify-stats-g23p.onrender.com";

// 🔹 Login con Spotify
loginButton.addEventListener("click", () => {
  window.location.href = `${baseUrl}/login`;
});

// 🔹 Captura el parámetro `code` cuando Spotify redirige
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if (code) {
  // Intercambiamos el code por un token
  fetch(`${baseUrl}/callback`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code }),
  })
    .then(res => res.json())
    .then(data => {
      if (data.access_token) {
        localStorage.setItem("spotify_token", data.access_token);
        window.location.href = "pages/home.html";
      } else {
        console.error("Error: no se recibió access_token", data);
        alert("No se pudo autenticar con Spotify.");
        window.location.href = "index.html";
      }
    })
    .catch(err => {
      console.error("Error al comunicarse con el backend:", err);
      alert("No se pudo conectar con el servidor.");
      window.location.href = "index.html";
    });
}
