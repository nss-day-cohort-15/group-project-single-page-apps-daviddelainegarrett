var darkBox = document.getElementById("darkTheme");
var maincontent = document.querySelector(".maincontent");
darkBox.addEventListener("change", getDark);

function getDark() {
  console.log("Getting dark!");
  maincontent.classList.toggle("darkmaincontent");
  }

var bigText = document.getElementById("largeText");
var maincontent = document.querySelector(".maincontent");
bigText.addEventListener("change", getBig);

function getBig() {
  console.log("Getting bigger!");
  maincontent.classList.toggle("getbig");
  }