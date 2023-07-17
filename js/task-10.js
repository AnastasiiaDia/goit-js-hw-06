const inputEl = document.querySelector("input");
const createEL = document.querySelector("button[data-create]");
const destroyEL = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");
const controlsEl = document.getElementById("controls");

createEL.addEventListener("click", onClickCreate);
destroyEL.addEventListener("click", onClickDestroy);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onClickCreate(event) {
  createBoxes(inputEl.value);
}

function onClickDestroy(event) {
  inputEl.value = "";
  boxesEl.innerHTML = "";
}

function createBoxes(amount) {
  let size = 30;
  let ar = [];
  for (let i = 0; i < amount; i += 1) {
    const controlsElchild = document.createElement("div");
    controlsElchild.style.cssText = `background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px; `;
    size += 10;
    ar.push(controlsElchild);
  }
  boxesEl.append(...ar);
}
