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

