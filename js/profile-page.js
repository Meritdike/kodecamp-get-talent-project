let recruiterName = document.getElementById("recruiter-name").innerText;
let recruiterCompany = document.getElementById("recruiter-company").innerText;
let recruiterType = document.getElementById("recruiter-type").innerText;
let recruiterSize = document.getElementById("recruiter-size").innerText;
let recruiterSalary = document.getElementById("recruiter-salary").innerText;
let recruiterLocation = document.getElementById("recruiter-location").innerText;
let recruiterAbout = document.getElementById("recruiter-about").innerText;

window.localStorage.setItem("recruiterName", recruiterName);
window.localStorage.setItem("recruiterCompany", recruiterCompany);
window.localStorage.setItem("recruiterType", recruiterType);
window.localStorage.setItem("recruiterSize", recruiterSize);
window.localStorage.setItem("recruiterSalary", recruiterSalary);
window.localStorage.setItem("recruiterLocation", recruiterLocation);
window.localStorage.setItem("recruiterAbout", recruiterAbout);


if (document.referrer === "https://meritdike.github.io/kodecamp-get-talent-project/updated-pp.html") {
    renderProfileUpdate();
}

function renderProfileUpdate() {
    let recruiterProfileNameUpdate = document.querySelector(".name-update");
    let recruiterProfileCompanyUpdate = document.querySelector(".company-update");
    let recruiterProfileTypeUpdate = document.querySelector(".type-update");
    let recruiterProfileSizeUpdate = document.querySelector(".size-update");
    let recruiterProfileSalaryUpdate = document.querySelector(".salary-update");
    let recruiterProfileLocationUpdate = document.querySelector(".location-update");
    let recruiterProfileAboutUpdate = document.querySelector(".about-update");

    recruiterProfileNameUpdate.innerText = localStorage.getItem("recruiterNameUpdate");
    recruiterProfileCompanyUpdate.innerText = localStorage.getItem("recruiterCompanyUpdate");
    recruiterProfileTypeUpdate.innerText = localStorage.getItem("recruiterTypeUpdate");
    recruiterProfileSizeUpdate.innerText = localStorage.getItem("recruiterSizeUpdate");
    recruiterProfileSalaryUpdate.innerText = localStorage.getItem("recruiterSalaryUpdate");
    recruiterProfileLocationUpdate.innerText = localStorage.getItem("recruiterLocationUpdate");
    recruiterProfileAboutUpdate.innerText = localStorage.getItem("recruiterAboutUpdate");
}