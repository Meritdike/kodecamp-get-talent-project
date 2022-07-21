const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const togglePassword = document.getElementById("eyeicon");
const sendBtn = document.getElementById("send-btn")

togglePassword.addEventListener('click', function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    this.classList.toggle("bi-eye");
});


password.addEventListener('focus', iconDisplay);
confirmPassword.addEventListener('focus', iconDisplay);
password.addEventListener('input', changeButtonColor);
confirmPassword.addEventListener('input', changeButtonColor);
email.addEventListener('input', changeButtonColor);

function iconDisplay() {
    if (!(onfocus)) {
        togglePassword.classList.add("icon-display");
    }
}

function changeButtonColor() {
    sendBtn.classList.add("button-active-color")
}