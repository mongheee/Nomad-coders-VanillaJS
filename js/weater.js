 const API_KEY = "e05f03cc41684f3b93d2b9386dab4d8b";

function onGeoOk(position){
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const location = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        location.innerText = data.name; 
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoerror(){ 
    alert("Can not find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoerror);
