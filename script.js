const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const displayTime = document.querySelector('.display-time');


function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
function formatTime(){
    const now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    let midday = "AM"
    if (seconds < 10) {
        seconds = "0"+now.getSeconds();
    }
    if (minutes < 10) {
        minutes = "0"+now.getMinutes();
    }
    if (hours > 12) {
     hours = now.getHours()- 12;
     midday = "PM"
    } 
    const time = hours + ":" + minutes + ":" + seconds + " " + midday;
    displayTime.innerHTML = `<h2>${time}</h2>`
    console.log(time);
}
setInterval(formatTime, 1000);
setInterval(setDate, 1000);