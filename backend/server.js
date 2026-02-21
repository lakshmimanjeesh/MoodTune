import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const moodSongs = {

  happy: [
    {
      name: "Happy",
      artist: "Pharrell Williams",
      link: "https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH",
      image: "https://i.scdn.co/image/ab67616d0000b273c8a6b9a5d2f8c7b1a9e6d4f3"
    },
    {
      name: "On Top of the World",
      artist: "Imagine Dragons",
      link: "https://open.spotify.com/track/1BxfuPKGuaTgP7aM0Bbdwr",
      image: "https://i.scdn.co/image/ab67616d0000b2736f9c4e3a1b2d5f8a7c6e4b3a"
    },
    {
      name: "Good Time",
      artist: "Owl City",
      link: "https://open.spotify.com/track/3ZFTkvIE7kyPt6Nu3PEa7V",
      image: "https://i.scdn.co/image/ab67616d0000b2731f8e7d6c5b4a392817e6d5c4b"
    },
    {
      name: "Sunset Lover",
      artist: "Petit Biscuit",
      link: "https://open.spotify.com/track/0L7LO1H39r3E6Udxj4xU0V",
      image: "https://i.scdn.co/image/ab67616d0000b2734e3d2c1b0a9f8e7d6c5b4a392"
    }
  ],

  sad: [
    {
      name: "Someone Like You",
      artist: "Adele",
      link: "https://open.spotify.com/track/4kflIGfjdZJW4ot2ioixTB",
      image: "https://i.scdn.co/image/ab67616d0000b273b2a1c9e8f7d6c5b4a392817e6"
    },
    {
      name: "Fix You",
      artist: "Coldplay",
      link: "https://open.spotify.com/track/7LVHVU3tWfcxj5aiPFEW4Q",
      image: "https://i.scdn.co/image/ab67616d0000b273d4c3b2a1908f7e6d5c4b3a291"
    },
    {
      name: "Let Her Go",
      artist: "Passenger",
      link: "https://open.spotify.com/track/2jyjW7sLisrN0xF7iBj2Yp",
      image: "https://i.scdn.co/image/ab67616d0000b273e6d5c4b3a2918f7e6d5c4b3a29"
    },
    {
      name: "River Flows In You",
      artist: "Yiruma",
      link: "https://open.spotify.com/track/2uU6Z2n8hXnq8oZ8kXq7A3",
      image: "https://i.scdn.co/image/ab67616d0000b273a2918f7e6d5c4b3a2918f7e6d5"
    }
  ],

  stressed: [
    {
      name: "Photograph",
      artist: "Ed Sheeran",
      link: "https://open.spotify.com/track/1HNkqx9Ahdgi1Ixy2xkKkL",
      image: "https://i.scdn.co/image/ab67616d0000b273b3a2918f7e6d5c4b3a2918f7e6"
    },
    {
      name: "Stay",
      artist: "Rihanna",
      link: "https://open.spotify.com/track/5VnDkUNyX6u5Sk0yZiP8XB",
      image: "https://i.scdn.co/image/ab67616d0000b273c4b3a2918f7e6d5c4b3a2918f7"
    },
    {
      name: "Skinny Love",
      artist: "Birdy",
      link: "https://open.spotify.com/track/3HfB5hBU0dmBt8T0iCmH42",
      image: "https://i.scdn.co/image/ab67616d0000b273d5c4b3a2918f7e6d5c4b3a2918"
    },
    {
      name: "Weightless",
      artist: "Marconi Union",
      link: "https://open.spotify.com/track/6kkwzB6hXLIONkEk9JciA6",
      image: "https://i.scdn.co/image/ab67616d0000b273e6c5b4a392817e6d5c4b3a2918"
    }
  ],

  excited: [
    {
      name: "Believer",
      artist: "Imagine Dragons",
      link: "https://open.spotify.com/track/0pqnGHJpmpxLKifKRmU6WP",
      image: "https://i.scdn.co/image/ab67616d0000b273f7e6d5c4b3a2918f7e6d5c4b3"
    },
    {
      name: "Titanium",
      artist: "David Guetta",
      link: "https://open.spotify.com/track/6b5P51m8xx2XA6U7sdNZ5E",
      image: "https://i.scdn.co/image/ab67616d0000b273e8f7d6c5b4a392817e6d5c4b3"
    },
    {
      name: "Can't Stop The Feeling",
      artist: "Justin Timberlake",
      link: "https://open.spotify.com/track/6JV2JOEocMgcZxYSZelKcc",
      image: "https://i.scdn.co/image/ab67616d0000b273d9f8e7d6c5b4a392817e6d5c4"
    },
    {
      name: "Levels",
      artist: "Avicii",
      link: "https://open.spotify.com/track/2V65y3PX4DkRhy1djlxd9p",
      image: "https://i.scdn.co/image/ab67616d0000b273c0b9a8f7e6d5c4b3a2918f7e6"
    }
  ],

  calm: [
    {
      name: "Ocean Eyes",
      artist: "Billie Eilish",
      link: "https://open.spotify.com/track/7hDVYcQq6MxkdJGweuCtl9",
      image: "https://i.scdn.co/image/ab67616d0000b273b1a2918f7e6d5c4b3a2918f7e6"
    },
    {
      name: "Yellow",
      artist: "Coldplay",
      link: "https://open.spotify.com/track/3AJwUDP919kvQ9QcozQPxg",
      image: "https://i.scdn.co/image/ab67616d0000b273a2b3c4d5e6f7a8b9c0d1e2f3a"
    },
    {
      name: "Holocene",
      artist: "Bon Iver",
      link: "https://open.spotify.com/track/2X485T9Z5Ly0xyaghN73ed",
      image: "https://i.scdn.co/image/ab67616d0000b273b3c4d5e6f7a8b9c0d1e2f3a4b"
    },
    {
      name: "Experience",
      artist: "Ludovico Einaudi",
      link: "https://open.spotify.com/track/1BncfTJAWxrsxyT9culBrj",
      image: "https://i.scdn.co/image/ab67616d0000b273c4d5e6f7a8b9c0d1e2f3a4b5c"
    }
  ],

  romantic: [
    {
      name: "Perfect",
      artist: "Ed Sheeran",
      link: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v",
      image: "https://i.scdn.co/image/ab67616d0000b273d5e6f7a8b9c0d1e2f3a4b5c6d"
    },
    {
      name: "All of Me",
      artist: "John Legend",
      link: "https://open.spotify.com/track/3U4isOIWM3VvDubwSI3y7a",
      image: "https://i.scdn.co/image/ab67616d0000b273e6f7a8b9c0d1e2f3a4b5c6d7e"
    },
    {
      name: "Just the Way You Are",
      artist: "Bruno Mars",
      link: "https://open.spotify.com/track/7BqBn9nzAq8spo5e7cZ0dJ",
      image: "https://i.scdn.co/image/ab67616d0000b273f7a8b9c0d1e2f3a4b5c6d7e8f"
    },
    {
      name: "Comptine d’un autre été",
      artist: "Yann Tiersen",
      link: "https://open.spotify.com/track/6e6hG6E3VnAhEo1mKzOe1b",
      image: "https://i.scdn.co/image/ab67616d0000b273a8b9c0d1e2f3a4b5c6d7e8f9a"
    }
  ],

  angry: [
    {
      name: "Numb",
      artist: "Linkin Park",
      link: "https://open.spotify.com/track/2nLtzopw4rPReszdYBJU6h",
      image: "https://i.scdn.co/image/ab67616d0000b273b9c0d1e2f3a4b5c6d7e8f9a0b"
    },
    {
      name: "Stronger",
      artist: "Kanye West",
      link: "https://open.spotify.com/track/4fzsfWzRhPawzqhX8Qt9F3",
      image: "https://i.scdn.co/image/ab67616d0000b273c0d1e2f3a4b5c6d7e8f9a0b1c"
    },
    {
      name: "Centuries",
      artist: "Fall Out Boy",
      link: "https://open.spotify.com/track/6U1e9zY9M7oF5mT1Qv1h5W",
      image: "https://i.scdn.co/image/ab67616d0000b273d1e2f3a4b5c6d7e8f9a0b1c2d"
    },
    {
      name: "Time",
      artist: "Hans Zimmer",
      link: "https://open.spotify.com/track/1lDWb6b6ieDQ2xT7ewTC3G",
      image: "https://i.scdn.co/image/ab67616d0000b273e2f3a4b5c6d7e8f9a0b1c2d3e"
    }
  ]
};

app.post("/analyze", (req, res) => {
  const { answers } = req.body;
  const score = answers.reduce((a, b) => a + b, 0);

  let mood;

  if (score <= 3) mood = "sad";
  else if (score <= 4) mood = "stressed";
  else if (score <= 5) mood = "calm";
  else if (score <= 6) mood = "romantic";
  else if (score <= 7) mood = "happy";
  else if (score <= 8) mood = "excited";
  else mood = "angry";

  res.json({ mood, songs: moodSongs[mood] });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});