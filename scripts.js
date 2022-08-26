let btnAlarme = document.querySelector(".btnAlarmeNavbar");
let btnCronometro = document.querySelector(".btnCronometroNavbar");
let sectionAlarme = document.querySelector(".alarme-content");
let sectionCronometro = document.querySelector(".cronometro-content");
let h1Cron = document.querySelector(".cronometro-content h1");
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
	sectionCronometro.style.display = "none";
	sectionAnimation();
});

btnCronometro.addEventListener("click", () => {
	sectionAlarme.style.display = "none";
	sectionCronometro.style.display = "flex";
	sectionAnimation();
});

cronButtonPlay.addEventListener("click", () => {
	cronButtonSquare.style.display = "none";
	cronButtonFlagQuit.style.display = "block";
	cronButtonPlay.style.display = "none";
	cronButtonPause.style.display = "block";
	buttonAnimation("buttonAnimation 0.2s ease-in");
	startCounting = setInterval(coutingStopWatch, 10);
});

cronButtonPause.addEventListener("click", () => {
	cronButtonFlagQuit.style.display = "none";
	cronButtonSquare.style.display = "block";
	cronButtonPause.style.display = "none";
	cronButtonPlay.style.display = "block";
	buttonAnimation("buttonAnimation 0.2s ease-in");
	clearInterval(startCounting);
	console.log("oi")
});

let countStopTimes = 0;

cronButtonFlagQuit.addEventListener("click", () => {
	h1Cron.style.animation = "h1-cronometroUp 0.2s linear";
	h1Cron.style.marginBottom = "130px";
	h1Cron.style.marginTop = "0";
	let stopTimes = document.createElement("p");
	countStopTimes++;
	stopTimes.textContent = countStopTimes +" | "+ h1Cron.textContent;
	timeFlag.appendChild(stopTimes);
	timeFlag.style.display = "block";
	buttonAnimation("buttonAnimation 0.2s ease-in");
});


cronButtonSquare.addEventListener("click", () => {
	cronButtonSquare.style.display = "none";
	cronButtonPlay.style.animation = "none";
	if (h1Cron.style.marginBottom == "130px") {
		h1Cron.style.animation = "h1-cronometroDown 0.2s linear";
	}
	
	setTimeout(() => {
		h1Cron.style.animation = "none";
	}, 500);
	
	h1Cron.style.marginBottom = "0";
	h1Cron.style.marginTop = "130px";
	timeFlag.innerHTML = "";
	timeFlag.style.display = "none";
	countStopTimes = 0;
	h1Cron.textContent = "00:00,00"
	milesium = 0;
	seconds = 0;
	minutes = 0;
	startCounting = setInterval(coutingStopWatch, 10);
	clearInterval(startCounting);
	buttonAnimation("buttonAnimation 0.2s ease-in");
});



//STOPWATCH FUNCTIONS
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
	sectionCronometro.style.animation = "sectionAnimation 0.2s ease-in";
}



