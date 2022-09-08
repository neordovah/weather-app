function resetDate() {
    var now = new Date();
    var night = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1, 
        0, 0, 0 
    );
    var msToMidnight = night.getTime() - now.getTime();

    document.getElementById("date").innerHTML = new Date().toDateString();

    setTimeout(function() {        
        resetDate(); 
    }, msToMidnight);
}

export default resetDate;