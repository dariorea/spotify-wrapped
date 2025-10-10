    // Captura el code que Spotify manda en la URL
    const code = new URLSearchParams(window.location.search).get("code");

    if (code) {
      // Envía el code al backend para obtener token
      fetch("http://127.0.0.1:3000/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code })
      })
        .then(res => res.json())
        .then(data => {
          // Guardá el token en localStorage
          localStorage.setItem("spotify_token", data.access_token);
          // Redirigí a la app principal
          window.location.href = "home.html";
        })
        .catch(err => console.error(err));
    } else {
      console.error("No se recibió code en la URL");
    }
