var darkBox = document.getElementById("darkTheme");
var maincontent = document.querySelector(".maincontent");
darkBox.addEventListener("change", getDark);

function getDark() {
  console.log("Getting dark!");
  maincontent.classList.toggle("darkmaincontent");
  }

