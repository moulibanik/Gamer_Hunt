document.getElementById("predictBtn").addEventListener("click", function () {
  const genre = document.getElementById("genre").value;
  const platform = document.getElementById("platform").value;
  const esportsView = document.getElementById("esportsView").value;
  const result = document.getElementById("result");

  if (!genre || !platform || !esportsView) {
    result.textContent = "⚠ Please select all fields!";
    result.style.color = "#ff4444";
    return;
  }

  // Simple prediction logic
  if (esportsView === "Yes" && (genre === "Shooter" || platform === "PC")) {
    result.textContent = "🎮 Regular Gamer Detected!";
    result.style.color = "#00ff88";
  } else {
    result.textContent = "🧩 Casual Gamer";
    result.style.color = "#ffcc00";
  }
});