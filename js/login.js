const loginForm = document.querySelector("#loginForm");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const loginMessage = document.querySelector("#loginMessage");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    emailError.textContent = "";
    passwordError.textContent = "";
    loginMessage.textContent = "";

    let isValid = true;

    if (email.value.trim() === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!email.value.includes("@") || !email.value.includes(".")) {
        emailError.textContent = "Please enter a valid email.";
        isValid = false;
    }

    if (password.value.trim() === "") {
        passwordError.textContent = "Password is required.";
        isValid = false;
    } else if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
    }

    if (isValid) {
    loginMessage.textContent = "Login successful!";
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1500);
}
});