let currentFilter = document.querySelector(".current-filter");
let trackName = document.querySelectorAll(".track-name");
let locationName = document.querySelectorAll(".location-name");

let search = document.getElementById("search");

search.addEventListener('click', locationFilter);
search.addEventListener('click', trackFilter);

function trackFilter() {
    trackName.forEach(track => {
        let userSelect = document.getElementById("user-select").value;
        let trackValue = track.innerText;
        console.log(trackValue);
        if (trackValue === userSelect) {
            currentFilter.innerHTML = trackValue;
            track.parentElement.parentElement.parentElement.parentElement.style.display = 'block';
        } else {
            track.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
        }
    })
}

function locationFilter() {
    locationName.forEach(location => {
        let locationSelect = document.getElementById("location-select").value;
        let locationValue = location.innerText;
        let locationCountry = locationValue.split(", ")[1];
        if (locationCountry === locationSelect) {
            location.parentElement.parentElement.parentElement.parentElement.style.display = 'block';
        } else {
            location.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
        }
    })
}