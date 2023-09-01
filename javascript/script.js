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

function emailValidation() {
  var emailField = document.getElementById("email-field");

  if (
    !emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    emailField.style.borderColor = "red";
    return false;
  } else {
    emailField.style.borderColor = "transparent";
    return true;
  }
  function onKeyDown() {
    document.getElementById("email-field").style.borderColor = "transparent";
  }
}
