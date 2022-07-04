const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const togglePassword = document.getElementById("eyeicon");
const signUp = document.getElementById("signup");

// function myFunction() {
//     let x =
//     document.getElementById("password");
//     if (x.type === "password") {
//         x.type = "text";
//     }
//     else {
//         x.type = "password"
//     }
// }


togglePassword.addEventListener('click', function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    this.classList.toggle("bi-eye");
});

password.addEventListener('focus', iconDisplay);
password.addEventListener('input', changeButtonColor);

function iconDisplay() {
    if (!(onfocus)) {
        togglePassword.classList.add("icon-display");
    }
}

email.addEventListener('input', changeButtonColor);
name.addEventListener('input', changeButtonColor);

function changeButtonColor() {
    signUp.classList.add("button-active-color")
}
