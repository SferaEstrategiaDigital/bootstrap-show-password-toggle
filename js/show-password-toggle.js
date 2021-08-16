const passwordInput = document.querySelector("[type='password']");
const togglePasswordButton = document.getElementById("toggle-password");

if(passwordInput === null || togglePasswordButton === null)
  return;

passwordInput.classList.add("input-password");
togglePasswordButton.getElementById("toggle-password").classList.remove("d-none");

togglePasswordButton.addEventListener("click", togglePassword);
function togglePassword() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordButton.setAttribute("aria-label", "Hide password.");
  } else {
    passwordInput.type = "password";
    togglePasswordButton.setAttribute(
      "aria-label",
      "Show password as plain text. " +
        "Warning: this will display your password on the screen."
    );
  }
}
