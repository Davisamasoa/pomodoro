const chk = document.querySelector("#chk");
const bodyTag = document.querySelector("body");
//NAV ICONS
let iconClock = document.querySelector("#iconClock");
let iconStopWatch = document.querySelector("#iconStopWatch");
let iconTimer = document.querySelector("#iconTimer");
let iconGlobo = document.querySelector("#iconGlobo");
let switchToggleDarkMode = document.querySelector(".label");

//POMODORO ICONS
let circle = document.querySelector(".circleIn");
let buttonPlayPomodoro = document.querySelector(".pomodoro-play");
let buttonPlayPomodoroImg = document.querySelector(".pomodoro-play img");
let buttonPausePomodoro = document.querySelector(".pomodoro-pause");
let buttonPausePomodoroImg = document.querySelector(".pomodoro-pause img");
let buttonNextTime = document.querySelector(".nextTime img");
let circleAnimation = document.querySelector(".circleAnimation");

//STOPWATCH
let buttonPlay = document.querySelector(".play img");
let buttonPause = document.querySelector(".pause img");
let buttonFlagQuit = document.querySelector(".flagQuit img");
let buttonSquare = document.querySelector(".square img");
let buttonFlag = document.querySelector(".flagQuit img");
let buttonsCron = document.querySelectorAll(".buttonCron button");
let buttonsPomo = document.querySelectorAll(".pomodoro-content button");

//TIMER
let inputTimer = document.querySelectorAll(".timer-content input");
let playTimerbtn = document.querySelector(".play-timer img");
let pauseTimerbtn = document.querySelector(".pause-timer img");
let resetTimerbtn = document.querySelector(".reset-timer img");
let timerButtons = document.querySelectorAll(".timer-content button");

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
		iconClock.src = "./assets/icons/pomoPRETO.svg";
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
		circleAnimation.style.borderColor = "black";
		buttonNextTime.src = "./assets/icons/nextPRETO.png";

		//STOPWATCH ICONS
		buttonPlay.src = "./assets/icons/playPRETO.svg";
		buttonPause.src = "./assets/icons/pausePRETO.svg";
		buttonFlagQuit.src = "./assets/icons/bandeiraPRETO.svg";
		buttonSquare.src = "./assets/icons/quadradoPRETO.svg";

		for (let i = 0; i < buttonsCron.length; i++) {
			buttonsCron[i].style.backgroundColor = "rgba(0, 0, 0, 0.3)";
		}

		for (let i = 0; i < buttonsPomo.length; i++) {
			buttonsPomo[i].style.backgroundColor = "rgba(0, 0, 0, 0.3)";
		}

		//TIMER
		for (let i = 0; i < timerButtons.length; i++) {
			timerButtons[i].style.backgroundColor = "rgba(0, 0, 0, 0.3)";
		}

		for (let i = 0; i < inputTimer.length; i++) {
			inputTimer[i].style.color = "black";
		}

		playTimerbtn.src = "./assets/icons/playPRETO.svg";
		pauseTimerbtn.src = "./assets/icons/pausePRETO.svg";
		resetTimerbtn.src = "./assets/icons/quadradoPRETO.svg";
	} else {
		//NAV ICONS
		iconClock.src = "./assets/icons/pomoBRANCO.svg";
		iconStopWatch.src = "./assets/icons/cronometroBRANCO.svg";
		iconTimer.src = "./assets/icons/ampulhetaBRANCO.svg";
		iconGlobo.src = "./assets/icons/globoBRANCO.svg";
		switchToggleDarkMode.style.backgroundColor = "rgba(111, 151, 211, 0.3)";

		//POMODORO ICONS
		buttonPlayPomodoro.style.backgroundColor = "rgba(111, 151, 211, 0.3)";
		buttonPlayPomodoroImg.src = "./assets/icons/playBRANCO.svg";
		buttonPausePomodoro.style.backgroundColor = "rgba(111, 151, 211, 0.3)";
		buttonPausePomodoroImg.src = "./assets/icons/pauseBRANCO.svg";
		circle.style.borderColor = "rgba(255, 255, 255, 1)";
		circleAnimation.style.borderColor = "rgba(255, 255, 255, 1)";
		buttonNextTime.src = "./assets/icons/nextBRANCO.png";

		//STOPWATCH ICONS
		buttonPlay.src = "./assets/icons/playBRANCO.svg";
		buttonPause.src = "./assets/icons/pauseBRANCO.svg";
		buttonFlagQuit.src = "./assets/icons/bandeiraBRANCO.svg";
		buttonSquare.src = "./assets/icons/quadradoBRANCO.svg";
		for (let i = 0; i < buttonsCron.length; i++) {
			buttonsCron[i].style.backgroundColor = "rgba(111, 151, 211, 0.3)";
		}

		for (let i = 0; i < buttonsPomo.length; i++) {
			buttonsPomo[i].style.backgroundColor = "rgba(111, 151, 211, 0.3)";
		}

		//TIMER
		for (let i = 0; i < timerButtons.length; i++) {
			timerButtons[i].style.backgroundColor = "rgba(111, 151, 211, 0.3)";
		}

		for (let i = 0; i < inputTimer.length; i++) {
			inputTimer[i].style.color = "white";
		}

		playTimerbtn.src = "./assets/icons/playBRANCO.svg";
		pauseTimerbtn.src = "./assets/icons/pauseBRANCO.svg";
		resetTimerbtn.src = "./assets/icons/quadradoBRANCO.svg";
	}
}
