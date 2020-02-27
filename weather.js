const weather = document.querySelector(".js-weather");
const API_KEY = "9769ada6acce3a9ebc9bfd373b72de5c";
const COORDS = "coords";

function getWeather(lat, lon)
{
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`).then
    (function(response)
    {
        return response.json();
    }).then
    (function(json)
    {
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}K @ ${place}`
    })
}

function saceCoords(coordsObj)
{
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position)
{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = 
    {
        latitude,
        longitude
    };
    saceCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError()
{
    console.log("Cant access geo location");
}

function askForCoords()
{
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords()
{
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null)
    {
        askForCoords();
    }
    else
    {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }

}

function init()
{
    loadCoords();
}
init();