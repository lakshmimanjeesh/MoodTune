let answers = [0, 0, 0];

function add(value, index) {
  answers[index] = value;
}

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

    const result = document.getElementById("result");
    result.innerHTML = `<h2>Mood Detected: ${data.mood.toUpperCase()}</h2>`;

    data.songs.forEach(song => {
      result.innerHTML += `
        <div class="song">
          <b>${song.name}</b><br>
          ${song.artist}<br>
          <a href="${song.link}" target="_blank">▶ Play</a>
        </div>
      `;
    });

  } catch (error) {
    alert("Backend not running!");
  }
}