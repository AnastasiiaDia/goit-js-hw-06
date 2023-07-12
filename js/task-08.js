const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value && password.value) {
    let finalyObject = {
      email: email.value,
      password: password.value,
    };
    console.log(finalyObject);
  } else {
    alert("Всі поля повинні бути заповнені");
  }
  event.currentTarget.reset();
}
