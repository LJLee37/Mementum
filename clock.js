const clockContainer = document.querySelector(".js-clock"), 
clockTitle = document.querySelector("h1");

function getTime(){
    const date = new Date();//not on this course. fullstack js course
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init(){
    getTime();
}
init();