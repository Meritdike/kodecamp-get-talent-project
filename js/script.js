const password = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");

togglePassword.addEventListener('click', function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    this.classList.toggle("bi-eye");
});

password.addEventListener('focus', iconDisplay);

function iconDisplay() {
    if (!(onfocus)) {
        togglePassword.classList.add("icon-display");
    }
}

// function myFunction() {
//     let x =
//     document.getElementById("mypassword");
//     if (x.type === "password") {
//         x.type = "text";
//     }
//     else {
//         x.type = "password"
//     }
// }