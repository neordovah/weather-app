import "../style/main.scss";
import changeUnit from "./change_unit.js";
import resetDate from "./date.js";
import resetHour from "./hour.js";
import getApi from "./api.js";

changeUnit();
resetDate();
resetHour();

/*["click", "keydown"].forEach((evt) => {
    document.getElementById("submit").addEventListener(evt, (e) => {
            if(e.keyCode == 13 || evt === "click") {
                console.log(e, evt)
                e.preventDefault();
                if(input.value != ""){
                    getApi();
                }
        }
    })
}) */

function Api(e) {
    e.preventDefault();
    if(input.value != ""){
        getApi();
    }
}

document.getElementById("submit").addEventListener("click", (e) => {
    Api(e);
})

document.getElementById("input").addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        Api(e);
    }
})

