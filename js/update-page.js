let recruiterNameInput = document.getElementById("recruiter-name-input");
let recruiterCompanyInput = document.getElementById("recruiter-company-input");
let recruiterTypeInput = document.getElementById("recruiter-type-input");
let recruiterSizeInput = document.getElementById("recruiter-size-input");
let recruiterSalaryInput = document.getElementById("recruiter-salary-input");
let recruiterLocationInput = document.getElementById("recruiter-location-input");
let recruiterAboutInput = document.getElementById("recruiter-about-input");

recruiterNameInput.value = localStorage.getItem("recruiterName")
recruiterCompanyInput.value = localStorage.getItem("recruiterCompany")
recruiterTypeInput.value = localStorage.getItem("recruiterType")
recruiterSizeInput.value = localStorage.getItem("recruiterSize")
recruiterSalaryInput.value = localStorage.getItem("recruiterSalary")
recruiterLocationInput.value = localStorage.getItem("recruiterLocation")
recruiterAboutInput.value = localStorage.getItem("recruiterAbout")


let save = document.getElementById("save");

save.addEventListener('click', updateFunction);

function updateFunction() {
    let recruiterNameUpdate = recruiterNameInput.value;
    window.localStorage.setItem("recruiterNameUpdate", recruiterNameUpdate);
    console.log(recruiterNameUpdate);
    let recruiterCompanyUpdate = recruiterCompanyInput.value;
    window.localStorage.setItem("recruiterCompanyUpdate", recruiterCompanyUpdate);
    console.log(recruiterCompanyUpdate);
    let recruiterTypeUpdate = recruiterTypeInput.value;
    window.localStorage.setItem("recruiterTypeUpdate", recruiterTypeUpdate);
    console.log(recruiterTypeUpdate);
    let recruiterSizeUpdate = recruiterSizeInput.value;
    window.localStorage.setItem("recruiterSizeUpdate", recruiterSizeUpdate);
    console.log(recruiterSizeUpdate);
    let recruiterSalaryUpdate = recruiterSalaryInput.value;
    window.localStorage.setItem("recruiterSalaryUpdate", recruiterSalaryUpdate);
    console.log(recruiterSalaryUpdate);
    let recruiterLocationUpdate = recruiterLocationInput.value;
    window.localStorage.setItem("recruiterLocationUpdate", recruiterLocationUpdate);
    console.log(recruiterLocationUpdate);
    let recruiterAboutUpdate = recruiterAboutInput.value;
    window.localStorage.setItem("recruiterAboutUpdate", recruiterAboutUpdate);
    console.log(recruiterAboutUpdate);
}