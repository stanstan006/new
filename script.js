const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')


function updateclock(){
    const currentDate= new Date()
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    const hourDeg = (hour/12)*360;
    const minuteDeg = (minute/60)*360;
    const secondDeg = (second/60)*360;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
    secondEl.style.transform = `rotate(${secondDeg}deg)`;

    //setTimeout(updateclock, 1000)
}

setInterval(updateclock,1000)

//updateclock();
// function updateclock(){
//     const now = new Date();
//     const hour = now.getHours() % 12;
//     const minute = now.getMinutes();
//     const second = now.getSeconds();

//     hourEl.style.transform = `rotate(${(hour / 12) * 360}deg)`;
//     minuteEl.style.transform = `rotate(${(minute / 60) * 360}deg)`;
//     secondEl.style.transform = `rotate(${(second / 60) * 360}deg)`;
// }

// setInterval(updateclock, 1000);