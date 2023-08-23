const currentHour = new Date().getHours();

function udskrivtid() {
  if (currentHour >= 5 && currentHour < 10) {
    console.log("Godmorgen");
  } else if (currentHour >= 10 && currentHour < 18) {
    console.log("Goddag");
  } else if (currentHour >= 18 && currentHour < 24) {
    console.log("Godaften");
  } else {
    console.log("Godnat");
  }
}

udskrivtid();
