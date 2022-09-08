//import changeUnit from "./change_unit.js";

async function getApi() {
    try {
        const city = document.getElementById("city");
        let input = document.getElementById("input");

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=6c5a6e239d11a56abfccfafaaf9da8da`);

        if(response.ok) {
            let weather_info = await response.json();
            console.log(weather_info);
            city.innerHTML = input.value[0].toUpperCase() + input.value.slice(1) + "&nbsp&nbsp";

            city.innerHTML = city.innerHTML
                .replace(",", '')
                .replace(".", '')

           // let temperature = Number(weather_info.main.temp);
            input.value = "";
            input.classList.remove("invalid");

            let temperature = Number(weather_info.main.temp);
            temperature = (Number(temperature) - 273) * 9/5 + 32;

            document.getElementById("text-description").innerHTML = weather_info.weather[0].description.toLowerCase();
            if(document.getElementById("change-unit").innerHTML == "F") {
                //let temperature = Number(weather_info.main.temp);
                document.getElementById("grades").innerHTML =  Math.round((temperature) * 10) / 10  + "&nbsp F";
            }
            else {
                //let temperature = Number(weather_info.main.temp);
                document.getElementById("grades").innerHTML = Math.round((temperature - 32) * 5/9 * 10) / 10 + "&nbsp C";
            }
            document.getElementById("humidity").innerHTML = "Humidity: " + weather_info.main.humidity + "%";
            document.getElementById("pressure").innerHTML = "Pressure: " + weather_info.main.pressure + "&nbsp hPa";
            document.getElementById("wind").innerHTML = "Wind: " + Math.round(Number(weather_info.wind.speed) * 3.6 * 10) / 10 + "km/h";

        } else {
            input.classList.add("invalid");
        }
    } catch(error) {
        console.log(error);
    }

    setTimeout(function() {        
        getApi(); 
    }, 3600 * 1000);
}

export default getApi;