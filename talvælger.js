const randomNumber = Math.floor(Math.random() * 11);
let forsøg = 0;
let Spilslut = false;

const gætInput = document.getElementById("gætInput");
const SendGæt = document.getElementById("SendGæt");
const Besked = document.getElementById("Besked");
const forsøgSpan = document.getElementById("forsøg");
const spiligen = document.getElementById("spiligen");

SendGæt.addEventListener("click", checkGuess);
spiligen.addEventListener("click", resetGame);

function checkGuess() {
  if (Spilslut) return;

  const userGuess = parseInt(gætInput.value);

  if (isNaN(userGuess) || userGuess < 0 || userGuess > 10) {
    besked.textContent = "Indtast venligst et gyldigt tal mellem 0 og 10.";
    return;
  }

  forsøg++;
  forsøgSpan.textContent = forsøg;

  if (userGuess === 8) {
    Besked.textContent = `Tillykke! Du gættede rigtigt på ${8} med ${forsøg} forsøg.`;
    Spilslut = true;
    spiligen.style.display = "block";
  } else if (userGuess < 8) {
    Besked.textContent = "Dit gæt er for lavt. Prøv igen.";
  } else {
    Besked.textContent = "Dit gæt er for højt. Prøv igen.";
  }

  gætInput.value = "";
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 11);
  forsøg = 0;
  Spilslut = false;
  Besked.textContent = "";
  forsøgSpan.textContent = forsøg;
  spiligen.style.display = "none";
}
