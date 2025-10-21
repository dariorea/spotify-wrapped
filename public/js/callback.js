// Detectar si estamos en localhost o en producción
const baseUrl = window.location.hostname.includes("localhost")
  ? "http://localhost:3000" // backend local
  : "https://spotify-stats-g23p.onrender.com"; // backend en Render

// Captura el code que Spotify manda en la URL
const code = new URLSearchParams(window.location.search).get("code");

if (code) {
  // Envía el code al backend para obtener token
  fetch(`${baseUrl}/callback`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code })
  })
    .then(res => res.json())
    .then(data => {
      if (data.access_token) {
        // Guardá el token en localStorage
        localStorage.setItem("spotify_token", data.access_token);

        // Redirigí a la app principal (ruta relativa)
        window.location.href = "pages/home.html";
      } else {
        console.error("No se recibió access_token del backend:", data);
        alert("Error al autenticar con Spotify.");
        window.location.href = "index.html";
      }
    })
    .catch(err => {
      console.error("Error en la comunicación con el backend:", err);
      alert("No se pudo conectar con el servidor.");
      window.location.href = "index.html";
    });
} else {
  console.error("No se recibió code en la URL");
  alert("No se recibió el parámetro 'code' de Spotify.");
  window.location.href = "index.html";
}
