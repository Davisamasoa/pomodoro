let btnAlarme = document.querySelector(".btnAlarmeNavbar");
let btnStopWatch = document.querySelector(".btnStopWatchNavbar");
let sectionAlarme = document.querySelector(".pomodoro-content");
let sectionStopWatch = document.querySelector(".stopWatch-content");
let h1Cron = document.querySelector(".stopWatch-content h1");
let h1CronDiv = document.querySelector(".h1");
let cronButtonPlay = document.querySelector(".play");
let cronButtonPause = document.querySelector(".pause");
let cronButtonPlayImg = document.querySelector(".playImg");
let cronButtonFlagQuit = document.querySelector(".flagQuit");
let cronButtonSquare = document.querySelector(".square");
let timeFlag = document.querySelector(".timeFlag");
let startCounting;


	//BUTTONS EVENT LISTENNERS

btnAlarme.addEventListener("click", () => {
	sectionAlarme.style.display = "flex";
	sectionStopWatch.style.display = "none";
	sectionAnimation();
});

btnStopWatch.addEventListener("click", () => {
	sectionAlarme.style.display = "none";
	sectionStopWatch.style.display = "flex";
	sectionAnimation();
});

cronButtonPlay.addEventListener("click", () => {
	startCounting = setInterval(coutingStopWatch, tempo);
	cronButtonSquare.style.display = "none";
	cronButtonFlagQuit.style.display = "flex";
	cronButtonPlay.style.display = "none";
	cronButtonPause.style.display = "flex";
	buttonAnimation("buttonAnimation 0.2s ease-in");
});

cronButtonPause.addEventListener("click", () => {
	cronButtonFlagQuit.style.display = "none";
	cronButtonSquare.style.display = "flex";
	cronButtonPause.style.display = "none";
	cronButtonPlay.style.display = "flex";
	buttonAnimation("buttonAnimation 0.2s ease-in");
	clearInterval(startCounting);
});

let countStopTimes = 0;

cronButtonFlagQuit.addEventListener("click", () => {
	if (timeFlag.style.display == "none") {
		h1CronDiv.style.animation = "h1-stopWatchUp 0.3s linear";
	} else {
		h1CronDiv.style.animation = "h1-stopWatchUp 0.3s linear";
	}
	
	h1CronDiv.style.marginBottom = "130px";
	h1CronDiv.style.marginTop = "0";
	let stopTimes = document.createElement("p");
	countStopTimes++;
	stopTimes.textContent = `✦ ${countStopTimes} - ${h1Cron.textContent}`;
	timeFlag.appendChild(stopTimes);
	timeFlag.style.display = "block";
	buttonAnimation("buttonAnimation 0.3s ease-out");
});


cronButtonSquare.addEventListener("click", () => {
	cronButtonSquare.style.display = "none";
	cronButtonPlay.style.animation = "none";
	if (h1CronDiv.style.marginBottom == "130px") {
		h1CronDiv.style.animation = "h1-stopWatchDown 0.2s linear";
	}
	
	setTimeout(() => {
		h1Cron.style.animation = "none";
	}, 500);
	
	h1CronDiv.style.marginBottom = "0";
	h1CronDiv.style.marginTop = "170px";
	timeFlag.innerHTML = "";
	timeFlag.style.display = "none";
	countStopTimes = 0;
	h1Cron.textContent = "00:00,00"
	milesium = 0;
	seconds = 0;
	minutes = 0;
	startCounting = setInterval(coutingStopWatch, tempo);
	clearInterval(startCounting);
	buttonAnimation("buttonAnimation 0.3s ease-out");
});



//STOPWATCH FUNCTIONS
let tempo = 10;
let zero = 0;
let milesium = 0;
let seconds = 0;
let minutes = 0;
function coutingStopWatch() {
	milesium++;
	
	
	if (milesium == 100) {
		milesium = 00;
		seconds++;
	}
	
	if (milesium < 10) {
		milesium = "0" + Number(milesium);
	} else {
		milesium = Number(milesium);
	}
	
	
	if (seconds == 60) {
		minutes++;
		seconds = 0;
	}
	
	if (seconds < 10) {
		seconds = "0" + Number(seconds);
	} else {
		seconds = Number(seconds);
	}

	if (minutes < 10) {
		minutes = "0" + Number(minutes);
	} else {
		minutes = Number(minutes);
	}
	
	h1Cron.textContent = `${minutes}:${seconds},${milesium}`;
  }


  
//BUTTON ANIMATION FUNCTIONS
function buttonAnimation(animation) {
	cronButtonPlay.style.animation = animation;
	cronButtonFlagQuit.style.animation = animation;
	cronButtonSquare.style.animation = animation;
	cronButtonPause.style.animation = animation;
	timeFlag.style.animation = animation;
}

function sectionAnimation() {
	sectionAlarme.style.animation = "sectionAnimation 0.2s ease-in";
	sectionStopWatch.style.animation = "sectionAnimation 0.2s ease-in";
}
