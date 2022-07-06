const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const pills = document.querySelectorAll(".pill");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > pills.length) {
    currentActive = pills.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  pills.forEach((pill, idx) => {
    if (idx < currentActive) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
}
