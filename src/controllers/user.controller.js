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
