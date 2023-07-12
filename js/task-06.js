const input = document.querySelector("#validation-input");
input.addEventListener("blur", colorFunc);
function colorFunc(evt) {
  input.value.length === Number(evt.currentTarget.dataset.length)
    ? input.classList.add("valid")
    : input.classList.add("invalid");
  console.dir(input.value.length);
  console.log(evt.currentTarget.dataset.length);
}
