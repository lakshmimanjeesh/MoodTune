let moodPoints = {
  happy: 0,
  sad: 0,
  romantic: 0,
  excited: 0,
  angry: 0,
  calm: 0
};

// Handle button clicks
document.querySelectorAll(".options button").forEach(btn => {
  btn.addEventListener("click", function () {

    const mood = this.dataset.mood;
    const parent = this.parentElement;

    // Remove active from siblings
    parent.querySelectorAll("button")
      .forEach(b => b.classList.remove("active"));

    this.classList.add("active");

    // Store mood selection in parent
    parent.dataset.selectedMood = mood;
  });
});

// Submit
async function submitQuiz() {

  // Reset points
  for (let key in moodPoints) {
    moodPoints[key] = 0;
  }

  const questions = document.querySelectorAll(".options");

  for (let q of questions) {
    if (!q.dataset.selectedMood) {
      alert("Please answer all questions!");
      return;
    }

    moodPoints[q.dataset.selectedMood]++;
  }

  // Find highest mood
  let detectedMood = Object.keys(moodPoints).reduce((a, b) =>
    moodPoints[a] > moodPoints[b] ? a : b
  );

  const response = await fetch("http://localhost:3000/getSongs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mood: detectedMood })
  });

  const data = await response.json();

  localStorage.setItem("playlist", JSON.stringify(data));
  window.location.href = "result.html";
}

// RESULT PAGE
if (window.location.pathname.includes("result.html")) {

  const container = document.getElementById("playlist");
  const data = JSON.parse(localStorage.getItem("playlist"));

  console.log("Songs received:", data?.songs?.length);

  if (!data || !data.songs) {
    container.innerHTML = "<p>No songs found.</p>";
  } else {

    container.innerHTML = `
      <h2 class="detected-mood">
        Your Mood: ${data.mood.toUpperCase()} 🎧
      </h2>
    `;

    // IMPORTANT: No slice, no limit
    for (let i = 0; i < data.songs.length; i++) {

      const song = data.songs[i];

      const trackId = song.link.split("/track/")[1];

      container.innerHTML += `
        <div class="song-card">
          <iframe 
            src="https://open.spotify.com/embed/track/${trackId}"
            width="100%" 
            height="80"
            frameborder="0"
            allow="encrypted-media">
          </iframe>
        </div>
      `;
    }
  }
}
let history = JSON.parse(localStorage.getItem("history")) || [];

history.push({
  mood: detectedMood,
  date: new Date().toISOString()
});

localStorage.setItem("history", JSON.stringify(history));
function goBack() {
  window.location.href = "index.html";
}
document.body.classList.add("light");

const toggleBtn = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  if (toggleBtn) toggleBtn.textContent = "☀️";
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "☀️";
    } else {
      localStorage.removeItem("theme");
      toggleBtn.textContent = "🌙";
      }
  });
  function saveMood(mood) {

  let history = JSON.parse(localStorage.getItem("history")) || [];

  history.push({
    mood: mood,
    date: new Date().toISOString()
  });

  localStorage.setItem("history", JSON.stringify(history));

  console.log("Mood saved:", mood);
}
}