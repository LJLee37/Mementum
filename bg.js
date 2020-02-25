const body = document.querySelector("body");

const IMG_NUMBER = 5;

function handleImgLoad()
{
    console
}

function paintImqage(imgNumber)
{
    const image = new Image();
    image.src = `images/${imgNumber}.jpg`;
    image.classList.add("bgImage")
    body.prepend(image);   
}

function genRandom()
{
    const number = Math.floor(Math.random() * 10) % IMG_NUMBER;
    return number;
}

function init()
{
    const randomNumber = genRandom();
    paintImqage(randomNumber);
}
init();