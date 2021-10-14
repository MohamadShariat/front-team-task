//* signin form validate
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "admin" && password === "admin") {
    window.location.href = "../html/list.html";
  } else {
    alert("Username or Password is invalid");
    loginForm.reset();
  }
});
