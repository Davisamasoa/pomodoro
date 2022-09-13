let br = document.querySelector(".brasil");
let eua = document.querySelector(".eua");
let uk = document.querySelector(".uk");
let france = document.querySelector(".france");
let japan = document.querySelector(".japan");
let china = document.querySelector(".china");



let date = new Date();
let hours = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

let timeZoneEua = Number(hours) - 1;
let timeZoneUk = Number(hours) + 4;
let timeZoneFr = Number(hours) + 5;
let timeZoneJapan = Number(hours) + 12;
let timeZoneChina = Number(hours) + 11;

console.log(timeZoneEua)
function formatter (value) {
    if (value < 10) {
        value = "0" + value;
    } else {
        value = value;
    }

    return value;
}


time();

setInterval(() => {
    time();
    
}, 1000)


function time() {
    let date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();



    br.textContent = date.toLocaleTimeString("pt-BR");
    eua.textContent = `${horas(timeZoneEua)}:${formatter(minute)}:${formatter(second)}`;
    uk.textContent = `${horas(timeZoneUk)}:${formatter(minute)}:${formatter(second)}`;
    france.textContent = `${horas(timeZoneFr)}:${formatter(minute)}:${formatter(second)}`;
    japan.textContent = `${horas(timeZoneJapan)}:${formatter(minute)}:${formatter(second)}`;
    china.textContent = `${horas(timeZoneChina)}:${formatter(minute)}:${formatter(second)}`;

    if (second < 10) {
        second = "0" + second;
    }

}



function horas(value) {
    if (value == -1){
        value = 23;
    }
    
    if (value > 23) {
        value = value - 24;

    }
    

    if (value < 10) {
        value = "0" + value;
    }

    
    return value;
}
