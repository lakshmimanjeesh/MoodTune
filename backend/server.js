import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const moodSongs = {

  happy: [
    { name: "Happy", artist: "Pharrell Williams", link: "https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH" },
    { name: "On Top of the World", artist: "Imagine Dragons", link: "https://open.spotify.com/track/1BxfuPKGuaTgP7aM0Bbdwr" },
    { name: "Good Time", artist: "Owl City", link: "https://open.spotify.com/track/3ZFTkvIE7kyPt6Nu3PEa7V" },
    { name: "Sunset Lover (Instrumental Feel)", artist: "Petit Biscuit", link: "https://open.spotify.com/track/0L7LO1H39r3E6Udxj4xU0V" }
  ],

  sad: [
    { name: "Someone Like You", artist: "Adele", link: "https://open.spotify.com/track/4kflIGfjdZJW4ot2ioixTB" },
    { name: "Fix You", artist: "Coldplay", link: "https://open.spotify.com/track/7LVHVU3tWfcxj5aiPFEW4Q" },
    { name: "Let Her Go", artist: "Passenger", link: "https://open.spotify.com/track/2jyjW7sLisrN0xF7iBj2Yp" },
    { name: "River Flows In You (Instrumental)", artist: "Yiruma", link: "https://open.spotify.com/track/2uU6Z2n8hXnq8oZ8kXq7A3" }
  ],

  stressed: [
    { name: "Photograph", artist: "Ed Sheeran", link: "https://open.spotify.com/track/1HNkqx9Ahdgi1Ixy2xkKkL" },
    { name: "Stay", artist: "Rihanna", link: "https://open.spotify.com/track/5VnDkUNyX6u5Sk0yZiP8XB" },
    { name: "Skinny Love", artist: "Birdy", link: "https://open.spotify.com/track/3HfB5hBU0dmBt8T0iCmH42" },
    { name: "Weightless (Instrumental Relaxation)", artist: "Marconi Union", link: "https://open.spotify.com/track/6kkwzB6hXLIONkEk9JciA6" }
  ],

  excited: [
    { name: "Believer", artist: "Imagine Dragons", link: "https://open.spotify.com/track/0pqnGHJpmpxLKifKRmU6WP" },
    { name: "Titanium", artist: "David Guetta", link: "https://open.spotify.com/track/6b5P51m8xx2XA6U7sdNZ5E" },
    { name: "Can't Stop The Feeling", artist: "Justin Timberlake", link: "https://open.spotify.com/track/6JV2JOEocMgcZxYSZelKcc" },
    { name: "Levels (Instrumental Energy)", artist: "Avicii", link: "https://open.spotify.com/track/2V65y3PX4DkRhy1djlxd9p" }
  ],

  calm: [
    { name: "Ocean Eyes", artist: "Billie Eilish", link: "https://open.spotify.com/track/7hDVYcQq6MxkdJGweuCtl9" },
    { name: "Yellow", artist: "Coldplay", link: "https://open.spotify.com/track/3AJwUDP919kvQ9QcozQPxg" },
    { name: "Holocene", artist: "Bon Iver", link: "https://open.spotify.com/track/2X485T9Z5Ly0xyaghN73ed" },
    { name: "Experience (Instrumental)", artist: "Ludovico Einaudi", link: "https://open.spotify.com/track/1BncfTJAWxrsxyT9culBrj" }
  ],

  romantic: [
    { name: "Perfect", artist: "Ed Sheeran", link: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v" },
    { name: "All of Me", artist: "John Legend", link: "https://open.spotify.com/track/3U4isOIWM3VvDubwSI3y7a" },
    { name: "Just the Way You Are", artist: "Bruno Mars", link: "https://open.spotify.com/track/7BqBn9nzAq8spo5e7cZ0dJ" },
    { name: "Comptine d’un autre été (Instrumental)", artist: "Yann Tiersen", link: "https://open.spotify.com/track/6e6hG6E3VnAhEo1mKzOe1b" }
  ],

  angry: [
    { name: "Numb", artist: "Linkin Park", link: "https://open.spotify.com/track/2nLtzopw4rPReszdYBJU6h" },
    { name: "Stronger", artist: "Kanye West", link: "https://open.spotify.com/track/4fzsfWzRhPawzqhX8Qt9F3" },
    { name: "Centuries", artist: "Fall Out Boy", link: "https://open.spotify.com/track/6U1e9zY9M7oF5mT1Qv1h5W" },
    { name: "Time (Instrumental)", artist: "Hans Zimmer", link: "https://open.spotify.com/track/1lDWb6b6ieDQ2xT7ewTC3G" }
  ]
};

app.post("/analyze", (req, res) => {
  const { answers } = req.body;
  const score = answers.reduce((a, b) => a + b, 0);

  let mood;

  if (score <= 3) mood = "sad";
  else if (score <= 5) mood = "stressed";
  else if (score <= 7) mood = "calm";
  else if (score <= 9) mood = "happy";
  else if (score <= 11) mood = "romantic";
  else if (score <= 13) mood = "excited";
  else mood = "angry";

  res.json({ mood, songs: moodSongs[mood] });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});