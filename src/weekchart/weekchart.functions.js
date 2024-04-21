function weeksBetween(d1, d2) {
  return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
}

function randomColor() {
  let color = "#";
  do {
    const letters = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  } while (color === "#FFFFFF");
  return color;
}

function createBox(color = randomColor()) {
  const box = document.createElement("div");
  box.classList.add("box");
  box.style.backgroundColor = color;
  return box;
}

function createWeekChart() {
  const weekChart = document.getElementById("week-chart-container");
  const today = new Date();
  const start = new Date(2002, 8, 16);
  const weeks = weeksBetween(start, today);
  const weekLeft = 4000 - weeks;
  for (let i = 0; i < weeks; i++) {
    const box = createBox();
    weekChart.innerHTML += box.outerHTML;
  }
  for (let i = 0; i < weekLeft; i++) {
    const box = createBox("#CFCFCF");
    weekChart.innerHTML += box.outerHTML;
  }
}