import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// 🎵 Mood Database (3 songs + 1 instrumental each)
const moodSongs = {

  happy: [
    { name: "Happy", artist: "Pharrell Williams", link: "https://youtu.be/ZbZSe6N_BXs" },
    { name: "On Top of the World", artist: "Imagine Dragons", link: "https://youtu.be/w5tWYmIOWGk" },
    { name: "Good Time", artist: "Owl City", link: "https://youtu.be/H7HmzwI67ec" },
    { name: "A New Beginning (Instrumental)", artist: "Bensound", link: "https://youtu.be/6J8G5d8y7E0" }
  ],

  sad: [
    { name: "Let Her Go", artist: "Passenger", link: "https://youtu.be/RBumgq5yVrA" },
    { name: "Fix You", artist: "Coldplay", link: "https://youtu.be/k4V3Mo61fJM" },
    { name: "Someone Like You", artist: "Adele", link: "https://youtu.be/hLQl3WQQoQ0" },
    { name: "Sad Piano (Instrumental)", artist: "Audio Library", link: "https://youtu.be/7maJOI3QMu0" }
  ],

  stressed: [
    { name: "Photograph", artist: "Ed Sheeran", link: "https://youtu.be/nSDgHBxUbVQ" },
    { name: "Stay", artist: "Rihanna", link: "https://youtu.be/JF8BRvqGCNs" },
    { name: "Skinny Love", artist: "Birdy", link: "https://youtu.be/aNzCDt2eidg" },
    { name: "Deep Relaxation (Instrumental)", artist: "Meditative Mind", link: "https://youtu.be/lFcSrYw-ARY" }
  ],

  excited: [
    { name: "Believer", artist: "Imagine Dragons", link: "https://youtu.be/7wtfhZwyrcc" },
    { name: "Can't Stop The Feeling", artist: "Justin Timberlake", link: "https://youtu.be/ru0K8uYEZWw" },
    { name: "Titanium", artist: "David Guetta", link: "https://youtu.be/JRfuAukYTKg" },
    { name: "Epic Motivation (Instrumental)", artist: "Audio Library", link: "https://youtu.be/kz6n1kz3F0s" }
  ],

  calm: [
    { name: "Ocean Eyes", artist: "Billie Eilish", link: "https://youtu.be/viimfQi_pUw" },
    { name: "Yellow", artist: "Coldplay", link: "https://youtu.be/yKNxeF4KMsY" },
    { name: "Holocene", artist: "Bon Iver", link: "https://youtu.be/TWcyIpul8OE" },
    { name: "Peaceful Guitar (Instrumental)", artist: "Bensound", link: "https://youtu.be/2OEL4P1Rz04" }
  ],

  romantic: [
    { name: "Perfect", artist: "Ed Sheeran", link: "https://youtu.be/2Vv-BfVoq4g" },
    { name: "All of Me", artist: "John Legend", link: "https://youtu.be/450p7goxZqg" },
    { name: "Just the Way You Are", artist: "Bruno Mars", link: "https://youtu.be/LjhCEhWiKXk" },
    { name: "Romantic Piano (Instrumental)", artist: "Audio Library", link: "https://youtu.be/9Q634rbsypE" }
  ],

  angry: [
    { name: "Numb", artist: "Linkin Park", link: "https://youtu.be/kXYiU_JCYtU" },
    { name: "Stronger", artist: "Kanye West", link: "https://youtu.be/PsO6ZnUZI0g" },
    { name: "Centuries", artist: "Fall Out Boy", link: "https://youtu.be/LBr7kECsjcQ" },
    { name: "Dark Energy (Instrumental)", artist: "Audio Library", link: "https://youtu.be/DWcJFNfaw9c" }
  ]
};

// 🧠 Mood Calculation
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

app.listen(3000, () => console.log("Server running on http://localhost:3000"));