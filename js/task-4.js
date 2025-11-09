const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const emailEl = loginFormEl.elements.email;
  const pwdEl = loginFormEl.elements.password;

  const emailValue = emailEl.value.trim();
  const pwdValue = pwdEl.value.trim();

  if (emailValue === "" || pwdValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formDataObj = {
    email: emailValue,
    password: pwdValue,
  };

  console.log(formDataObj);

  loginFormEl.reset();
}
