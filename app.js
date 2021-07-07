function digitalClock() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let timeFormat = "AM";

    if (hour === 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour -= 12;
        timeFormat = "PM";
    }
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    let finalTime = `${hour}:${minute}:${second}`;
    document.getElementById("time").innerText = finalTime;
    document.querySelector("small").innerText = timeFormat;

    //call immidiately
    setInterval(digitalClock, 1000);
}

digitalClock();
