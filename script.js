const color = document.querySelectorAll(".color");
const body = document.body;

addEventListener("click", (e) => {
  color.forEach((c) => {
    if (c == e.target) {
      body.className = "";
      e.target.classList.add("active");
      body.classList.add(`${e.target.dataset.color}`);
    }
  });
});
