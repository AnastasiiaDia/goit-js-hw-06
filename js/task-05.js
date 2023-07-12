const text = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

text.addEventListener("input", (event) => {
  if (event.currentTarget.value.trim() === "") {
    return (span.textContent = "Anonymous");
  }
  span.textContent = event.currentTarget.value.trim();
});
