let firstName = document.getElementById("firstName"),
  lastName = document.getElementById("lastName"),
  email = document.getElementById("email"),
  password = document.getElementById("password"),
  submitBtn = document.getElementById("submit");

submitBtn.onclick = () => {
  lastName.value == ""
    ? lastName.parentElement.classList.add("active")
    : lastName.parentElement.classList.remove("active");
  firstName.value == ""
    ? firstName.parentElement.classList.add("active")
    : firstName.parentElement.classList.remove("active");
  password.value == ""
    ? password.parentElement.classList.add("active")
    : password.parentElement.classList.remove("active");
  if (email.value !== "" && /\w+@\w+.\w+/gi.test(email.value)) {
    email.parentElement.classList.remove("active");
  } else {
    email.parentElement.classList.add("active");
  }
};
