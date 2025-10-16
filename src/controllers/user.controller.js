import axios from "axios";

export const getUser = async (req, res) => {
    const accessToken = req.headers.authorization?.split(" ")[1];
    if (!accessToken) {
      return res.status(401).json({ error: "Token no proporcionado" });
    }
    try {
      const result = await axios.get(
        "https://api.spotify.com/v1/me",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      res.json(result.data);
    } catch (error) {
      console.error(error.response?.data || error.message);
      res.status(500).json({ error: "Error obteniendo canciones" });
    }
  }

export const getUserArtist = async (req, res) => {
    const accessToken = req.headers.authorization?.split(" ")[1];

    if (!accessToken) {
        return res.status(401).json({ error: "Token no proporcionado" });
      }
      try {
        const result = await axios.get(
          "https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=5",
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        res.json(result.data);
      } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json({ error: "Error obteniendo canciones" });
      }
}
export const getUserTracks = async (req, res) => {
    const accessToken = req.headers.authorization?.split(" ")[1];

    if (!accessToken) {
        return res.status(401).json({ error: "Token no proporcionado" });
      }
      try {
        const result = await axios.get(
          "https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=5",
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        res.json(result.data);
      } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json({ error: "Error obteniendo canciones" });
      }
}


export const getUserGenres = async (req, res) => {
  const accessToken = req.headers.authorization?.split(" ")[1];

  if (!accessToken) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }

  try {
    // Petición a Spotify
    const result = await axios.get(
      "https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=50",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    const data = result.data; // ✅ Esta es la respuesta real de Spotify

    // Mapa para contar géneros
    const genreCount = {};
    data.items.forEach(artist => {
      artist.genres.forEach(genre => {
        genreCount[genre] = (genreCount[genre] || 0) + 1;
      });
    });

    // Convertir a array y ordenar por cantidad
    const sortedGenres = Object.entries(genreCount)
      .sort((a, b) => b[1] - a[1])
      .map(([genre, count]) => ({ genre, count }));

    // Enviar respuesta al frontend
    return res.json(sortedGenres);

  } catch (error) {
    console.error(error.response?.data || error.message);
    return res.status(500).json({ error: "Error obteniendo géneros del usuario" });
  }
};

export const getRecentlyPlayed = async (req, res) => {
  const accessToken = req.headers.authorization?.split(" ")[1];

  if (!accessToken) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }

  try {
    const result = await axios.get(
      "https://api.spotify.com/v1/me/player/recently-played?limit=10",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    // Devuelve solo lo necesario si querés (por ejemplo, items)
    res.status(200).json(result.data);
  } catch (error) {
    console.error(error.response?.data || error.message);

    return res.status(500).json({
      error: "Error obteniendo canciones recientemente reproducidas",
      details: error.response?.data || error.message,
    });
  }
};
