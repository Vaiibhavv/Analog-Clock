console.log("This is the js part of Anologue clock");

setInterval(() => {
    // get all classes from html
    let hr = document.querySelector(".hour")
    let min = document.querySelector(".minute")
    let sec = document.querySelector(".second")
    // to set  the current date 
    let date = new Date();
    let hour = date.getHours(); 
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    // calculate the degree of hours , seconds and minutes 
    let hourRotation = (30 * hour) + (0.5 * minute);
    let minuteRotation = 6 * minute;
    let secondRotation = 6 * seconds;
   // apply the degree on transform property.
    hr.style.transform = `rotate(${hourRotation}deg)`;
    min.style.transform = `rotate(${minuteRotation}deg)`;
    sec.style.transform = `rotate(${secondRotation}deg)`;

}, 1000);