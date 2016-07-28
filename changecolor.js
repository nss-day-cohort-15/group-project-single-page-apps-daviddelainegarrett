// var darkBox = document.getElementById("darkTheme");
// var maincontent = document.querySelector(".maincontent");
// darkBox.addEventListener("change", getDark);

// function getDark() {
//   console.log("Getting dark!");
//   maincontent.classList.toggle("darkmaincontent");
//   }

var bigText = document.getElementById("largeText");
var maincontent = document.querySelector(".maincontent");
bigText.addEventListener("change", getBig);

function getBig() {
  console.log("Getting bigger!");
  maincontent.classList.toggle("getbig");
  }

$(document).ready(function(){
    $("#myModal").on('shown.bs.modal', function () {
        var saveButton = document.getElementById("saveTheme");
        saveButton.addEventListener("click", (e)=>{
            $('#myModal').modal('hide');
            var backgroundColors = document.querySelectorAll(".bg");
            var maincontent = document.querySelector(".maincontent");
            var fontColors = document.querySelectorAll(".fc");
            var messageText = document.querySelectorAll(".messageContent")
            backgroundColors.forEach((bgColor) => {
              if(bgColor.checked){
                maincontent.style.backgroundColor = `${bgColor.value}`;
              }
            })
            fontColors.forEach((fcColor) => {
              if(fcColor.checked){
                messageText.forEach((message)=>{
                  message.style.color = `${fcColor.value}`;
              })
            }
        })
    });
  });
});
    // var maincontent = document.querySelector(".maincontent");
    // saveButton.addEventListener("click", (e)=>{
    //   var backgroundColors = document.querySelectorAll(".bg");
    //   backgroundColors.forEach((bgColor)=>{
    //     console.log(bgColor)
    //     // if (bgColor.checked){

    //     // }
    //   })
    //   // maincontent.style.backgroundColor =
    // })
  // }

