function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

// Update clock immediately, then every second
updateClock();

setInterval(updateClock, 1000);



// function updateClock() {
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');

//     document.getElementById("hours").innerHTML = hours;
//     document.getElementById("minutes").innerHTML = minutes;
// }

// // update as website is opened
// updateClock();

// const delay = (60 - new Date().getSeconds()) * 1000;
// setTimeout(() => {
//     updateClock(); 
//     setInterval(updateClock, 60000);
// }, delay);