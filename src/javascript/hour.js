function resetHour() {

    let today = new Date();
        let hour = today.getHours();
        let minute = today.getMinutes();
        if(hour < 10) {
            hour = String(0) + hour;
        }
        if(minute < 10) {
            minute = String(0) + minute;
        }

        document.getElementById("hour").innerHTML = hour + ":" + minute;

    setTimeout(function() {        
        resetHour(); 
    }, 1000);
}

export default resetHour;