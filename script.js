const color = document.querySelectorAll(".color");
const body = document.body;

addEventListener("click", (e) => {
  color.forEach((c) => {
    if (c == e.target) {
      body.className = "";
      body.classList.add(`${e.target.dataset.color}`);
    }
  });
});
