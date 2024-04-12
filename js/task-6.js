function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxDiv = document.querySelector("#boxes");

function onCreateBoxes(amount) {
  boxDiv.innerHTML = "";
  const arrayDiv = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    arrayDiv.push(div);
    size += 10;
  }
  boxDiv.append(...arrayDiv);
}

function onDestroyBoxes() {
  boxDiv.innerHTML = "";
}

createButton.addEventListener("click", () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    onCreateBoxes(amount);
    input.value = "";
  }
});

destroyButton.addEventListener("click", onDestroyBoxes);
