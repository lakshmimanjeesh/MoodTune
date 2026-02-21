import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

const songs = {

  happy: [
    { link: "https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH" },
    { link: "https://open.spotify.com/track/1WkMMavIMc4JZ8cfMmxHkI" },
    { link: "https://open.spotify.com/track/5xTtaWoae3wi06K5WfVUUH" },
    { link: "https://open.spotify.com/track/463CkQjx2Zk1yXoBuierM9" }
  ],

  sad: [
    { link: "https://open.spotify.com/track/4kflIGfjdZJW4ot2ioixTB" },
    { link: "https://open.spotify.com/track/2jyjDEH9eZtXhW0Iu5j2Ea" },
    { link: "https://open.spotify.com/track/3p8R0uRkqZc7cA6T3sqwO5" },
    { link: "https://open.spotify.com/track/7qEHsqek33rTcFNT9PFqLf" }
  ],

  romantic: [
    { link: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v" },
    { link: "https://open.spotify.com/track/3U4isOIWM3VvDubwSI3y7a" },
    { link: "https://open.spotify.com/track/3rmo8F54jFF8OgYsqTxm5d" },
    { link: "https://open.spotify.com/track/6habFhsOp2NvshLv26DqMb" }
  ],

  excited: [
    { link: "https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeMS" },
    { link: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b" },
    { link: "https://open.spotify.com/track/463CkQjx2Zk1yXoBuierM9" },
    { link: "https://open.spotify.com/track/6RUKPb4LETWmmr3iAEQktW" }
  ],

  angry: [
    { link: "https://open.spotify.com/track/0pqnGHJpmpxLKifKRmU6WP" },
    { link: "https://open.spotify.com/track/2nLtzopw4rPReszdYBJU6h" },
    { link: "https://open.spotify.com/track/5ghIJDpPoe3CfHMGu71E6T" },
    { link: "https://open.spotify.com/track/1fLlRApgzxWweF1JTf8yM5" }
  ],

  calm: [
    { link: "https://open.spotify.com/track/1HNkqx9Ahdgi1Ixy2xkKkL" },
    { link: "https://open.spotify.com/track/7iN1s7xHE4ifF5povM6A48" },
    { link: "https://open.spotify.com/track/2takcwOaAZWiXQijPHIx7B" },
    { link: "https://open.spotify.com/track/1dGr1c8CrMLDpV6mPbImSI" }
  ]

};

app.post("/getSongs", (req, res) => {
  const { mood } = req.body;
  res.json({ mood, songs: songs[mood] });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
