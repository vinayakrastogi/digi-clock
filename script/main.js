// ----------------------------CLOCK UPDATES INCLUDING SECONDS------------------------------

// function updateClock() {
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const seconds = now.getSeconds().toString().padStart(2, '0');

//     document.getElementById("hours").innerHTML = hours;
//     document.getElementById("minutes").innerHTML = minutes;
//     document.getElementById("seconds").innerHTML = seconds;
// }

// // Update clock immediately, then every second
// updateClock();

// setInterval(updateClock, 1000);

// ----------------------------CLOCK UPDATES INCLUDING EXCLUDING SECONDS------------------------------

const updateClock = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
}

// update as website is opened
updateClock();

const delay = (60 - new Date().getSeconds()) * 1000;

setTimeout(() => {
    updateClock(); 
    setInterval(updateClock, 60000);
}, delay);


let toggle = 0
const navbar = document.getElementById("navbar-buttons");

const toggleNavigationBar = () => {
    if (toggle == 0) {
        navbar.style.display = "none";
        document.getElementById("toggle-nav").innerHTML = "CLOCK CONTAINER >";
    } else {
        navbar.style.display = "block";
        document.getElementById("toggle-nav").innerHTML = "CLOCK CONTAINER <"
    }
    toggle = (toggle == 1 ? 0 : 1);
}

document.getElementById("toggle-nav").onclick = function() {toggleNavigationBar()};

const changeTheme = (themeLocation) => {
    document.getElementById("theme-changer").href = themeLocation;
    document.getElementById("main-theme").href = "style/main.css";
};

const changeThemeNoCSS = (themeLocation) => {
    document.getElementById("theme-changer").href = "";
    document.getElementById("main-theme").href = "";
};