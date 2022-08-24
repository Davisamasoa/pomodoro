let btnAlarme = document.querySelector(".btnAlarmeNavbar");
let btnCronometro = document.querySelector(".btnCronometroNavbar");
let sectionAlarme = document.querySelector(".alarme-content");
let sectionCronometro = document.querySelector(".cronometro-content");
let cronButtonPlay = document.querySelector(".play");
let cronButtonPause = document.querySelector(".pause");
let cronButtonPlayImg = document.querySelector(".playImg");
let cronButtonFlagQuit = document.querySelector(".flagQuit");
let cronButtonSquare = document.querySelector(".square");

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
	buttonAnimation();
});

cronButtonPause.addEventListener("click", () => {
	cronButtonFlagQuit.style.display = "none";
	cronButtonSquare.style.display = "block";
	cronButtonPause.style.display = "none";
	cronButtonPlay.style.display = "block";
	buttonAnimation();
});

function buttonAnimation() {
	cronButtonPlay.style.animation = "buttonAnimation 0.2s ease-in";
	cronButtonFlagQuit.style.animation = "buttonAnimation 0.2s ease-in";
	cronButtonSquare.style.animation = "buttonAnimation 0.2s ease-in";
	cronButtonPause.style.animation = "buttonAnimation 0.2s ease-in";
}

function sectionAnimation() {
	sectionAlarme.style.animation = "sectionAnimation 0.2s ease-in";
	sectionCronometro.style.animation = "sectionAnimation 0.2s ease-in";
}
