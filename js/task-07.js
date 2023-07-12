const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
input.addEventListener("input", changeFont);
function changeFont(evt) {
  let size = evt.currentTarget.value;
  span.style.fontSize = `${size}px`;
}
