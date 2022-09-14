let pomodoroNumber = document.querySelector(".pomodoroNumber");
let pomodoroPlayButton = document.querySelector(".pomodoro-play");
let pomodoroPlayIcon = document.querySelector(".pomodoro-play img");
let pomodoroPauseButton = document.querySelector(".pomodoro-pause");
let pomodoroPauseIcon = document.querySelector(".pomodoro-pause img");
let nextTime = document.querySelector(".nextTime");
let audio = document.querySelector("audio");
let description = document.querySelector(".circleOut span");
let circleAnimate = document.querySelector(".circleAnimation");
let animation = "circleAnimation 1.3s linear infinite";

let startPomodoroCounting;
pomodoroTimes = [
	{
		description: "Foco!",
		time: "1440",
	},

	{
		description: "Descanso!",
		time: "240",
	},

	{
		description: "Foco!",
		time: "1440",
	},

	{
		description: "Descanso!",
		time: "240",
	},

	{
		description: "Foco!",
		time: "1440",
	},

	{
		description: "Descanso!",
		time: "240",
	},

	{
		description: "Foco!",
		time: "1440",
	},

	{
		description: "Descanso!",
		time: "1740",
	},
];
let index = 0;
let pseconds = parseInt(pomodoroTimes[index].time);
let pminute = Math.floor(pseconds / 60);

pomodoroPlayButton.addEventListener("click", () => {
	pomodoroPlayButton.style.display = "none";
	pomodoroPauseButton.style.display = "block";
	buttonAnimationPomodoro("buttonAnimation 0.3s ease-out");
	pomodoroCounting();
	startPomodoroCounting = setInterval(() => {
		pomodoroCounting();
		circleAnimate.style.animation = animation;
	}, 1000);
});

pomodoroPauseButton.addEventListener("click", () => {
	pomodoroPauseButton.style.display = "none";
	pomodoroPlayButton.style.display = "block";
	buttonAnimationPomodoro("buttonAnimation 0.3s ease-out");
	clearInterval(startPomodoroCounting);
	circleAnimate.style.animation = "none";
});

nextTime.addEventListener("click", () => {
	newTimeAnimation();

	clearInterval(startPomodoroCounting);
	circleAnimate.style.animation = "none";
	index++;
	if (index == pomodoroTimes.length) {
		index = 0;
	}

	pseconds = parseInt(pomodoroTimes[index].time);
	description.textContent = pomodoroTimes[index].description;

	pminute = Math.floor(pseconds / 60);
	pomodoroCounting();
	startPomodoroCounting = setInterval(() => {
		pomodoroCounting();
		circleAnimate.style.animation = animation;
	}, 1000);
	pomodoroPauseButton.style.display = "block";
	nextTime.style.display = "none";
});

function pomodoroCounting() {
	if (pomodoroNumber.textContent == "00:01") {
		pomodoroNumber.textContent = "00:00";

		clearInterval(startPomodoroCounting);
		description.textContent = "Ciclo finalizado!";
		nextTime.style.display = "block";
		pomodoroPauseButton.style.display = "none";
		buttonAnimationPomodoro("buttonAnimation 0.3s ease-out");
		audio.play();

		setTimeout(() => {
			alert("O tempo acabou!");
			circleAnimate.style.animation = "none";
		}, 15);
	}

	pseconds--;

	pseconds = pseconds % 60;
	if (pseconds < 10) {
		pseconds = "0" + pseconds;
	}

	if ((parseInt(pminute) != 00) & (parseInt(pseconds) == 00)) {
		pminute = parseInt(pminute) - 1;
		pseconds = 59;
	}

	if (Number(pminute) < 10) {
		pminute = "0" + Number(pminute);
	}

	pomodoroNumber.textContent = pminute + ":" + pseconds;
}

function buttonAnimationPomodoro(animation) {
	pomodoroPlayButton.style.animation = animation;
	pomodoroPauseButton.style.animation = animation;
	nextTime.style.animation = animation;
}

function newTimeAnimation() {
	pomodoroNumber.style.animation = "sectionAnimation 0.2s ease-in";
	description.style.animation = "sectionAnimation 0.2s ease-in";
}
