import axios from "axios";

export const getTopTenArtist = async (req, res) => {
    const accessToken = req.headers.authorization?.split(" ")[1]
    if (!accessToken) {
        return res.status(401).json({ error: "Token no proporcionado" });
    }

    try {
        const result = await axios.get("https://api.spotify.com/v1/playlists/0fN5U24LAKiKvORxvI77FP", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
        res.json(result.data);
    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json({ error: "Error obteniendo canciones" });
    }
}

export const getTopTracksTwelve = async (req, res) => {
    const accessToken = req.headers.authorization?.split(" ")[1];
    if (!accessToken) {
      return res.status(401).json({ error: "Token no proporcionado" });
    }
  
    try {
      const result = await axios.get(
        "https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=long_term",
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
  export const getTopTracksSix = async (req, res) => {
    const accessToken = req.headers.authorization?.split(" ")[1];
    if (!accessToken) {
      return res.status(401).json({ error: "Token no proporcionado" });
    }
  
    try {
      const result = await axios.get(
        "https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=medium_term",
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