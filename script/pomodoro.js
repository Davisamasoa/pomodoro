let pomodoroNumber = document.querySelector(".pomodoroNumber");
let pomodoroPlayButton = document.querySelector(".pomodoro-play");
let pomodoroPlayIcon = document.querySelector(".pomodoro-play img");
let pomodoroPauseButton = document.querySelector(".pomodoro-pause");
let pomodoroPauseIcon = document.querySelector(".pomodoro-pause img");
let nextTime = document.querySelector(".nextTime");
let audio = document.querySelector("audio");
let description = document.querySelector(".circleOut span")

let startPomodoroCounting;
pomodoroTimes = [
    {
        description: "Foco!",
        time: "1440"
    },

    {
        description: "Descanso!",
        time: "240"
    },

    {
        description: "Foco!",
        time: "1440"
    },
    
    {
        description: "Descanso!",
        time: "240"
    },
    
    {
        description: "Foco!",
        time: "1440"
    },
    
    {
        description: "Descanso!",
        time: "240"
    },
    
    {
        description: "Foco!",
        time: "1440"
    },
    
    {
        description: "Descanso!",
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
    startPomodoroCounting = setInterval(() => {
        pomodoroCounting();
    }, 1000);
    clearInterval(startPomodoroCounting);
    index++;
    if (index == pomodoroTimes.length) {
        index = 0;
    }

    console.log(index);
    pseconds = parseInt(pomodoroTimes[index].time);
    description.textContent = pomodoroTimes[index].description;

    pminute = Math.floor(pseconds / 60);
    startPomodoroCounting = setInterval(() => {
        pomodoroCounting();
    }, 1000);
    pomodoroPauseButton.style.display = "block";
    nextTime.style.display = "none";
    
})



function pomodoroCounting() {
    if (pomodoroNumber.textContent == "00:01") {
        
        clearInterval(startPomodoroCounting);
        pomodoroNumber.textContent = "00:00";
        description.textContent = "Ciclo finalizado!"
        nextTime.style.display = "block";
        pomodoroPauseButton.style.display = "none";
        buttonAnimationPomodoro("buttonAnimation 0.3s ease-out");
        audio.play();
        alert("O tempo acabou!");
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
    
    if (Number(pminute) < 10) {
        pminute = "0" + Number(pminute);
    }

    pomodoroNumber.textContent = pminute +":"+pseconds;


}
  
  
  
  
function buttonAnimationPomodoro(animation) {
	pomodoroPlayButton.style.animation = animation;
    pomodoroPauseButton.style.animation = animation;
    nextTime.style.animation = animation;
}