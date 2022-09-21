// 위치로 날씨 확인
// https://openweathermap.org/current#one
const API_KEY = "e0f2a35fbaf17cb88b0c96941df97f63";
function onGeoOk(position){
    // 위도
    const lat = position.coords.latitude;
    // 경도
    const lon = position.coords.longitude;
    console.log('you live it');
    console.log(lat, lon);
    // 위도와 경도를 가지고 위치를 설정해줘야함
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(url);
    // 백
    fetch(url).then(response => response.json()).then(data => {
        const weatherDiv = document.querySelector("#weather");
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
        weatherDiv.classList.add("weather");
    });
}   
function onGeoError(){
    alert("Can't find you. No weather for you.");
};
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);