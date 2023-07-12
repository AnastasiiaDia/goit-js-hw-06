// Напиши скрипт, який змінює кольори фону елемента <body>
// через інлайн-стиль по кліку на button.change-color
//  і виводить значення кольору в span.color.
const body = document.querySelector("body");
const button = document.querySelector(".change-color");
button.addEventListener("click", onClick);
const span = document.querySelector(".color");
function onClick(event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
  // console.dir(span);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.dir(body);
