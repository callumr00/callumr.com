img = document.getElementById("img");

const delay = 200;
let intervalId;

function start() {
    intervalId = setInterval(() => {
        img.setAttribute("src", `../img/index/${Math.floor(Math.random() * Math.floor(11))}.jpg`);
        img.style.objectPosition = `${Math.floor(Math.random() * Math.floor(100))}% ${Math.floor(Math.random() * Math.floor(100))}%`
    }, delay);
}

function stop() {
    clearInterval(intervalId);
    img.setAttribute("src", `../img/index/featureImage-min.jpg`);
    img.style.objectPosition = `50% 65%`
}

img.addEventListener("mouseover", (start));
img.addEventListener("mouseout", (stop));