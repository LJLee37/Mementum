const API_KEY = "9769ada6acce3a9ebc9bfd373b72de5c";
const COORDS = "coords";

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
    const loadedCords = localStorage.getItem(COORDS);
    if (loadedCords === null)
    {
        askForCoords();
    }
    else
    {
        //
    }

}

function init()
{
    loadCoords();
}
init();