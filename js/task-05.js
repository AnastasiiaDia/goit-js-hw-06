const text = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
text.addEventListener("input", (event) => {
  span.textContent = event.currentTarget.value;
});
