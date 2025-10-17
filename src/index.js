import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";
import topRoutes from "./routes/top.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
// Carpeta donde están tus HTML, JS y CSS
app.use(express.static("public")); // si tus archivos están en /public
// o si están en la raíz
app.use(express.static("."));


// 🔹 Ruta para iniciar el login con Spotify
app.get("/login", (req, res) => {
  const scope = "user-top-read user-follow-read user-read-recently-played playlist-modify-private playlist-modify-public";
  const auth_url = `https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=${process.env.REDIRECT_URI}&scope=${scope}&show_dialog=true`;
  res.redirect(auth_url);
});

// 🔹 Callback que Spotify llama con el "code"
app.post("/callback", async (req, res) => {
  const { code } = req.body;
  const params = new URLSearchParams();
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", process.env.REDIRECT_URI);
  try {
    const result = await axios.post("https://accounts.spotify.com/api/token", params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic " + Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString("base64"),
      },
    });
    // devuelve token a frontend
    res.json(result.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Error obteniendo token" });
  }
});

// 🔹 Rutas externas (módulo top)
app.use("/track", topRoutes);
app.use("/user", userRoutes)

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
