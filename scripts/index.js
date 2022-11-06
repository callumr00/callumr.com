img = document.getElementById("img");

const delay = 300;
let intervalId;

function start() {
    intervalId = setInterval(() => {
        // img.setAttribute("src", `../img/index/DSCF2591-min.jpg`);

        img.setAttribute("src", `../img/photos/MQ/${Math.floor(Math.random() * Math.floor(14))}.jpg`);
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