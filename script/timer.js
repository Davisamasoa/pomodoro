let timerHours = document.querySelector(".hours");
let timerMinutes = document.querySelector(".minutes");
let timerSeconds = document.querySelector(".seconds");
let playTimerButton = document.querySelector(".play-timer");
let pauseTimerButton =  document.querySelector(".pause-timer");
let resetTimerButton = document.querySelector(".reset-timer");
let audioTimer = document.querySelector("audio");
let inputsTimer = document.querySelectorAll(".timer-content input");
console.log(inputsTimer)

playTimerButton.addEventListener("click", () => {

    buttonAnimation();
    if (timerHours.value == 0 & timerMinutes.value == 0 & timerSeconds.value == 0) {
        alert("Impossível iniciar o timer com o valor inserido!")
    } else {
        playTimerButton.style.display = "none";
        pauseTimerButton.style.display = "block";
        timerCounting();
        startTimerCounting = setInterval(() => {
            timerCounting();
        }, 1000);

        for (let i = 0; i < inputsTimer.length; i++) {
            
            inputsTimer[i].style.border = "none";
        }
    }
});

pauseTimerButton.addEventListener("click", () => {
    console.log("oi")
    pauseTimerButton.style.display = "none";
    playTimerButton.style.display = "block";
    buttonAnimation();
    clearInterval(startTimerCounting);

});

resetTimerButton.addEventListener("click", () => {
    buttonAnimation();
    clearInterval(startTimerCounting);
    timerHours.value = "00";
    timerMinutes.value = "00";
    timerSeconds.value = "00";
});

function timerCounting() {
    
    if (timerHours.value == 0 & timerMinutes.value == 0 & timerSeconds.value == 1) {
        
        clearInterval(startTimerCounting);
       
        playTimerButton.style.display = "block";
        pauseTimerButton.style.display = "none";
        buttonAnimation();
        audioTimer.play()
        
        setTimeout(() => {
            alert("O tempo acabou!");
            timerHours.value = "00";
            timerMinutes.value = "00";
            timerSeconds.value = "00";
        }, 15);
    }
    
    if (parseInt(timerHours.value) != 0 & parseInt(timerMinutes.value) == 0 & parseInt(timerSeconds.value) == 0) {
        timerHours.value--;
        timerMinutes.value = 59;
        timerSeconds.value = 60;
    }

    if (Number(timerHours.value) < 10) {
        timerHours.value = "0" + Number(timerHours.value);
    }

    if (parseInt(timerMinutes.value) != 00 & parseInt(timerSeconds.value) == 00 || parseInt(timerMinutes.value) != 00 & timerSeconds.value == " ") {
        timerMinutes.value = parseInt(timerMinutes.value) - 1;
        timerSeconds.value = 60;
    }
    timerSeconds.value--;
    
    timerSeconds.value = timerSeconds.value % 60;
    if (timerSeconds.value < 10) {
        timerSeconds.value = "0" + timerSeconds.value;
    }

    
    if (Number(timerMinutes.value) < 10) {
        timerMinutes.value = "0" + Number(timerMinutes.value);
    }

    


}

function buttonAnimation() {
    let animation = "buttonAnimation 0.3s ease-out";
	playTimerButton.style.animation = animation;
    pauseTimerButton.style.animation = animation;
    resetTimerButton.style.animation = animation;
    setTimeout(() => {
        playTimerButton.style.animation = "none";
        pauseTimerButton.style.animation = "none";
        resetTimerButton.style.animation = "none";
    }, 400)
}