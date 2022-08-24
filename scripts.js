let btnAlarme = document.querySelector(".btnAlarmeNavbar");
let btnCronometro = document.querySelector(".btnCronometroNavbar");
let sectionAlarme = document.querySelector(".alarme-content");
let sectionCronometro = document.querySelector(".cronometro-content");

btnAlarme.addEventListener("click", () => {
  sectionAlarme.style.display = "flex";
  sectionCronometro.style.display = "none";
});

btnCronometro.addEventListener("click", () => {
  sectionAlarme.style.display = "none";
  sectionCronometro.style.display = "flex";
});
