const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// emial validation
var emailField = document.getElementById("email-field");
var submitButton = document.getElementById("submit-button");
function emailValidation() {
  if (
    !emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    emailField.style.borderColor = "red";
    submitButton.style.backgroundColor = "red";
    return false;
  }

  emailField.style.borderColor = "green";
  submitButton.style.backgroundColor = "green";
  return true;
}
submitButton.addEventListener("click", () => {
  emailField.value = " ";
});
