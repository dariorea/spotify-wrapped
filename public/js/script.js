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
}
