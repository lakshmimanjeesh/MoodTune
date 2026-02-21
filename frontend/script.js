let answers = [0, 0, 0];

// QUIZ PAGE BUTTONS
if (document.querySelectorAll(".options button").length > 0) {

  document.querySelectorAll(".options button").forEach(btn => {
    btn.addEventListener("click", function () {

      const index = this.dataset.index;
      const value = this.dataset.value;

      answers[index] = Number(value);

      // remove active from same group
      document.querySelectorAll(`button[data-index='${index}']`)
        .forEach(b => b.classList.remove("active"));

      this.classList.add("active");
    });
  });

}

// SUBMIT QUIZ
async function submitQuiz() {

  if (answers.includes(0)) {
    alert("Please answer all questions!");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers })
    });

    const data = await response.json();

    localStorage.setItem("playlist", JSON.stringify(data));

    window.location.href = "result.html";

  } catch (error) {
    alert("Server not running!");
    console.error(error);
  }
}

// RESULT PAGE
if (window.location.pathname.includes("result.html")) {

  const container = document.getElementById("playlist");
  const data = JSON.parse(localStorage.getItem("playlist"));

  if (!data) {
    container.innerHTML = "<p>No playlist found. Take quiz again.</p>";
  } else {

    container.innerHTML = `
      <h2 class="detected-mood">
        Your Mood: ${data.mood.toUpperCase()} 🎵
      </h2>
    `;

    data.songs.forEach(song => {

      const trackId = song.link.split("/track/")[1].split("?")[0];

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
    });
  }
}

function goBack() {
  window.location.href = "index.html";
}