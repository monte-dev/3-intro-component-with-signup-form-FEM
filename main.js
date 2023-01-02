const form = document.querySelector("#signupForm");
const firstNameField = document.querySelector("#firstname");
const lastNameField = document.querySelector("#lastname");
const emailField = document.querySelector("#email");
const passwordField = document.querySelector("#password");
const submitBtn = document.querySelector("#submit");

const firstNameError = document.querySelector("#firstNameError");
const lastNameError = document.querySelector("#lastNameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");

const errorIconFirst = document.querySelector("#error-icon-first");
const errorIconLast = document.querySelector("#error-icon-last");
const errorIconEmail = document.querySelector("#error-icon-email");
const errorIconPassword = document.querySelector("#error-icon-password");

function validateForm() {
  if (firstNameField.value == "") {
    firstNameError.classList.remove("hidden");
    errorIconFirst.classList.remove("hidden");
    firstNameField.placeholder = "";
    firstNameField.parentElement.style.marginBottom = "20px";
    firstNameError.innerHTML = "First Name cannot be empty";
  }
  if (lastNameField.value == "") {
    lastNameError.classList.remove("hidden");
    errorIconLast.classList.remove("hidden");
    lastNameField.placeholder = "";
    lastNameField.parentElement.style.marginBottom = "20px";
    lastNameError.innerHTML = "Last Name cannot be empty";
  }
  if (emailField.value == "") {
    emailError.classList.remove("hidden");
    errorIconEmail.classList.remove("hidden");
    emailField.placeholder = "email@example.com";
    // https://stackoverflow.com/questions/54749402/how-to-update-placeholder-color-using-javascript
    emailField.style.setProperty("--c", "red");
    emailField.parentElement.style.marginBottom = "20px";
    emailError.innerHTML = "Looks like this is not an email";
  }
  if (passwordField.value == "") {
    passwordError.classList.remove("hidden");
    errorIconPassword.classList.remove("hidden");
    passwordField.placeholder = "";
    passwordField.parentElement.style.marginBottom = "20px";
    passwordError.innerHTML = "Password cannot be empty";
  }
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  validateForm();
});
