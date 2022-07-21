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