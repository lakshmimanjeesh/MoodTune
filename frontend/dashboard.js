document.addEventListener("DOMContentLoaded", function () {

  const history = JSON.parse(localStorage.getItem("history")) || [];

  const last7Days = new Date();
  last7Days.setDate(last7Days.getDate() - 7);

  const weeklyData = history.filter(entry =>
    new Date(entry.date) >= last7Days
  );

  const moodCounts = {
    happy: 0,
    sad: 0,
    romantic: 0,
    angry: 0,
    calm: 0,
    stressed: 0
  };

  weeklyData.forEach(entry => {
    if (moodCounts.hasOwnProperty(entry.mood)) {
      moodCounts[entry.mood]++;
    }
  });

  const ctx = document.getElementById("moodChart");

  if (!ctx) {
    console.error("Canvas not found");
    return;
  }

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: Object.keys(moodCounts),
      datasets: [{
        label: "Mood Count",
        data: Object.values(moodCounts)
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: { precision: 0 }
        }
      }
    }
  });

  let mostFrequentMood = "No data yet";
  let max = 0;

  for (let mood in moodCounts) {
    if (moodCounts[mood] > max) {
      max = moodCounts[mood];
      mostFrequentMood = mood;
    }
  }

  document.getElementById("summary").innerHTML = `
    <h3>Most Frequent Mood This Week:</h3>
    <p><strong>${mostFrequentMood.toUpperCase()}</strong></p>
  `;

});