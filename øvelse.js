const ølImg = document.getElementById("øl");
const snapsImg = document.getElementById("snaps");
const colaImg = document.getElementById("cola");
const spriteImg = document.getElementById("sprite");

function VurderAlkohol() {
  if (this.alt === "øl" || this.alt === "snaps") {
    console.log("Indeholder alkohol");
  } else {
    console.log("Alkoholfri");
  }
}

ølImg.addEventListener("click", VurderAlkohol);
snapsImg.addEventListener("click", VurderAlkohol);

colaImg.addEventListener("click", VurderAlkohol);
spriteImg.addEventListener("click", VurderAlkohol);
