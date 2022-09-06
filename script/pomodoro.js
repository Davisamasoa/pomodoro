let pomodoroNumber = document.querySelector(".pomodoroNumber");
let pomodoroPlayButton = document.querySelector(".pomodoro-play");
let pomodoroPlayIcon = document.querySelector(".pomodoro-play img");
let pomodoroPauseButton = document.querySelector(".pomodoro-pause");
let pomodoroPauseIcon = document.querySelector(".pomodoro-pause img");
let nextTime = document.querySelector(".nextTime");

let startPomodoroCounting;
pomodoroTimes = [
    {
        time: "1440"
    },

    {
        time: "240"
    },

    {
        time: "1440"
    },
    
    {
        time: "240"
    },
    
    {
        time: "1440"
    },
    
    {
        time: "240"
    },
    
    {
        time: "1440"
    },
    
    {
        time: "1740"
    },
];
let index = 0;
let pseconds = parseInt(pomodoroTimes[index].time);
let pminute = Math.floor(pseconds / 60);


pomodoroPlayButton.addEventListener("click", () => {
    pomodoroPlayButton.style.display = "none";
    pomodoroPauseButton.style.display = "block";
    buttonAnimationPomodoro("buttonAnimation 0.3s ease-out");
    startPomodoroCounting = setInterval(() => {
        pomodoroCounting();
    }, 1000);
})

pomodoroPauseButton.addEventListener("click", () => {
    pomodoroPauseButton.style.display = "none";
    pomodoroPlayButton.style.display = "block";
    buttonAnimationPomodoro("buttonAnimation 0.3s ease-out");
    clearInterval(startPomodoroCounting);
})

nextTime.addEventListener("click", () => {
    clearInterval(startPomodoroCounting);
    index++;
    pseconds = parseInt(pomodoroTimes[index].time);
    startPomodoroCounting = setInterval(() => {
        pomodoroCounting();
    }, 1000);
   
})



function pomodoroCounting() {
    console.log(pomodoroNumber.textContent);
    if (pomodoroNumber.textContent == "0:01") {
        
        clearInterval(startPomodoroCounting);
        pomodoroNumber.textContent = "00:00";
        nextTime.style.display = "block";
    }
    
    pseconds--;
    
    pseconds = pseconds % 60;
    if (pseconds < 10) {
        pseconds = "0" + pseconds;
    }

    if (parseInt(pminute) != 0 & parseInt(pseconds) == 0 ) {
        pminute = parseInt(pminute) - 1;
        pseconds = 59;
    }


    pomodoroNumber.textContent = pminute +":"+pseconds;


}
  
  
  
  
function buttonAnimationPomodoro(animation) {
	pomodoroPlayButton.style.animation = animation;
	pomodoroPauseButton.style.animation = animation;
}