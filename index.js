let now = new Date();
let Dates = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let date = document.querySelector("#date");
date.innerHTML = Dates[now.getDay()];

let time = document.querySelector("#time");
let hour = now.getHours();
let min = now.getMinutes();

time.innerHTML = `${hour}: ${min}`;

let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";

function city(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#input-city");
    let cityName = cityInput.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showWeather);
}

let form = document.querySelector("#enter-city");
form.addEventListener("submit", city);

function showWeather(response) {
    let currentCity = document.querySelector("#cityName");
    currentCity.innerHTML = response.data.name;
    let temperature = document.querySelector("#degree")
    let degree = Math.round(response.data.main.temp);
    temperature.innerHTML = `${degree}°C`;
}



function handlePosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showWeather);
}

 function Current(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(handlePosition)
}

let element = document.querySelector("#current-city");
element.addEventListener("click",Current)






// function degree(event) {
//     event.preventDefault();

//     let degreeValue = document.querySelector("#degree").textContent.trim();

//     let CorF = degreeValue.slice(-1);
//     if (CorF === "C") {
//         let celsiusToF = parseFloat(degreeValue.slice(0, -1));
//         let fahrenheit = ((celsiusToF * 9) / 5) + 32;
//         fahrenheit = Math.round(fahrenheit);
//         event.target.innerHTML = `${fahrenheit}°F`;
//     } else if (CorF === "F") {
//         let fahrenheitToC = parseFloat(degreeValue.slice(0, -1));
//         let celsius = ((fahrenheitToC - 32) * 5) / 9;
//         celsius = Math.round(celsius);
//         event.target.innerHTML = `${celsius}°C`;
//     }
// }



