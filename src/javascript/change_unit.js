function changeUnit() {
    const button = document.getElementById("change-unit");

    button.addEventListener("click", () => {
        //console.log(document.getElementById("grades").innerHTML)

        if(document.getElementById("grades").innerHTML != "") {

            let temperature = document.getElementById("grades").innerHTML.substring(0, document.getElementById("grades").innerHTML.length - 8);

            if(document.getElementById("grades").innerHTML.substring(document.getElementById("grades").innerHTML.length - 1, document.getElementById("grades").innerHTML.length) == "C") { 
                temperature = Number(temperature) * 9/5 + 32; ///fahrenheit 
            }

            if(button.innerHTML == "F") {
                button.innerHTML = "C";
                document.getElementById("grades").innerHTML = Math.round((temperature - 32) *5/9 * 10) / 10 + "&nbsp C";
            }
            else {
                button.innerHTML = "F";
                document.getElementById("grades").innerHTML = Math.round(temperature * 10) / 10  + "&nbsp F";
            }
        }
    })
}

export default changeUnit;