const input = document.querySelector("#validation-input");
input.addEventListener("blur", colorFunc);
function colorFunc(evt) {
  evt.target.classList.remove("valid", "invalid");
  // input.currentTarget.classList.remove("invalid");
  input.value.length === Number(evt.currentTarget.dataset.length)
    ? input.classList.add("valid")
    : input.classList.add("invalid");
}
