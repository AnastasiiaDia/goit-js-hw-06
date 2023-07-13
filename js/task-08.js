const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value.trim() && password.value.trim()) {
    let finalyObject = {
      email: email.value.trim(),
      password: password.value.trim(),
    };
    console.log(finalyObject);
  } else {
    alert("Всі поля повинні бути заповнені");
  }
  event.currentTarget.reset();
}
