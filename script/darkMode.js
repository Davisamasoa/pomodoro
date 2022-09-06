const chk = document.querySelector("#chk");
const bodyTag = document.querySelector("body");
//NAV ICONS
let iconClock = document.querySelector("#iconClock");
let iconStopWatch = document.querySelector("#iconStopWatch");
let iconTimer= document.querySelector("#iconTimer");
let iconGlobo = document.querySelector("#iconGlobo");
let switchToggleDarkMode = document.querySelector(".label");

//POMODORO ICONS
let circle = document.querySelector(".circleIn");
let buttonPlayPomodoro = document.querySelector(".pomodoro-play");
let buttonPlayPomodoroImg = document.querySelector(".pomodoro-play img");
let buttonPausePomodoro = document.querySelector(".pomodoro-pause");
let buttonPausePomodoroImg = document.querySelector(".pomodoro-pause img");

//STOPWATCH 
let buttonPlay = document.querySelector(".play img");
let buttonPause = document.querySelector(".pause img");
let buttonFlagQuit = document.querySelector(".flagQuit img");
let buttonSquare = document.querySelector(".square img");
let buttonFlag = document.querySelector(".flagQuit img");
let buttonsCron = document.querySelectorAll(".buttonCron button");

chk.addEventListener("change", (e) => {
    if (e.target.checked == true) { 
        document.body.classList = "dark";
    } else {
        document.body.classList = " ";
}
    changeIcon();
});

function changeIcon() {
    if (bodyTag.classList == "dark") {
        //NAV ICONS
        iconClock.src = "./assets/icons/relogioPRETO.svg";
        iconStopWatch.src = "./assets/icons/cronometroPRETO.svg";
        iconTimer.src = "./assets/icons/ampulhetaPRETO.svg";
        iconGlobo.src = "./assets/icons/globoPRETO.svg";
        switchToggleDarkMode.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        
        //POMODORO ICONS
        buttonPlayPomodoro.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        buttonPlayPomodoroImg.src = "./assets/icons/playPRETO.svg";
        buttonPausePomodoro.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        buttonPausePomodoroImg.src = "./assets/icons/pausePRETO.svg";
        circle.style.borderColor = "black";

        //STOPWATCH ICONS
        buttonPlay.src = "./assets/icons/playPRETO.svg";
        buttonPause.src = "./assets/icons/pausePRETO.svg";
        buttonFlagQuit.src = "./assets/icons/bandeiraPRETO.svg";
        buttonSquare.src = "./assets/icons/quadradoPRETO.svg";
       
        for (let i = 0; i < buttonsCron.length; i++){
            buttonsCron[i].style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        }
    } else {
        //NAV ICONS
        iconClock.src = "./assets/icons/relogioBRANCO.svg";
        iconStopWatch.src = "./assets/icons/cronometroBRANCO.svg";
        iconTimer.src = "./assets/icons/ampulhetaBRANCO.svg";
        iconGlobo.src = "./assets/icons/globoBRANCO.svg";
        switchToggleDarkMode.style.backgroundColor = "rgba(111, 151, 211, 0.3)";
        
        //ALARM ICONS
        buttonPlayPomodoro.style.backgroundColor = "rgba(111, 151, 211, 0.3)";
        buttonPlayPomodoroImg.src = "./assets/icons/playBRANCO.svg";
        buttonPausePomodoro.style.backgroundColor = "rgba(111, 151, 211, 0.3)";
        buttonPausePomodoroImg.src = "./assets/icons/pauseBRANCO.svg";
        circle.style.borderColor = "rgba(255, 255, 255, 1)";

        //STOPWATCH ICONS
        buttonPlay.src = "./assets/icons/playBRANCO.svg";
        buttonPause.src = "./assets/icons/pauseBRANCO.svg";
        buttonFlagQuit.src = "./assets/icons/bandeiraBRANCO.svg";
        buttonSquare.src = "./assets/icons/quadradoBRANCO.svg";
        for (let i = 0; i < buttonsCron.length; i++){
            buttonsCron[i].style.backgroundColor = "rgba(111, 151, 211, 0.3)";
        }
    }
}