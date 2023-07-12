// console.dir(container);
let counterValue = 0;
const counter = document.querySelector("#counter");
const minus = counter.firstElementChild;
const plus = counter.lastElementChild;
const value = counter.querySelector("#value");

minus.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

plus.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
console.log(counter);
