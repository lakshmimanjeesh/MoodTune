let answers = [];

function add(val) {
  answers.push(val);
}

async function submitQuiz() {
  const res = await fetch("http://localhost:3000/analyze", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ answers })
  });

  const data = await res.json();

  const result = document.getElementById("result");
  result.innerHTML = `<h2>Mood Detected: ${data.mood}</h2>`;

  data.songs.forEach(song => {
    result.innerHTML += `
      <div class="song">
        <b>${song.name}</b><br>
        ${song.artist}<br>
        <a href="${song.link}" target="_blank">▶ Play</a>
      </div>
    `;
  });

  answers = [];
}