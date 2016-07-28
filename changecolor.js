var Messages = (function(userMessage){

    var bigText = document.getElementById("largeText");
    var maincontent = document.querySelector(".maincontent");

    function getBig(){
      maincontent.classList.toggle("getbig");
    }

    bigText.addEventListener("change", getBig);

    userMessage.fontColor =function() {
      var fontColors = document.querySelectorAll(".fc");
      var messageText = document.querySelectorAll(".messageContent")
      fontColors.forEach((fcColor) => {
              if(fcColor.checked){
                messageText.forEach((message)=>{
                  message.style.color = `${fcColor.value}`;
              })
            }
        })

    }
    //Change the background color function
    userMessage.backgroundColor = function(){
        var backgroundColors = document.querySelectorAll(".bg");
            backgroundColors.forEach((bgColor) => {
              if(bgColor.checked){
                maincontent.style.backgroundColor = `${bgColor.value}`;
              }
            })
    }
$(document).ready(function(){
    $("#myModal").on('shown.bs.modal', function () {
        var saveButton = document.getElementById("saveTheme");
        saveButton.addEventListener("click", (e)=>{
            $('#myModal').modal('hide');
            userMessage.backgroundColor();
            userMessage.fontColor();
    });
  });
});
})(Messages || {});


