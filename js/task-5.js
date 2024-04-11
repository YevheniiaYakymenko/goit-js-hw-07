function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widgetColor = document.querySelector(".color");
const btnColor = document.querySelector(".change-color");

btnColor.addEventListener("click", () => {
  const randomHexColor = getRandomHexColor();
  document.body.style.backgroundColor = randomHexColor;
  widgetColor.textContent = randomHexColor;
});
