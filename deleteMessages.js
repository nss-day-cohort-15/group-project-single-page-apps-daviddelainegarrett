
var Messages = (function(userMessage){

  userMessage.disableButton = function (){
    var clearButton = document.querySelector('.clearBtn');
    var messageArea = document.querySelector(".maincontent");
      if(messageArea.innerHTML === "") {
        console.log("There are no messages")
        clearButton.setAttribute("disabled")
      } else {
        clearButton.removeAttribute("disabled")
      }
    }

  userMessage.clearMessages = function(){
    var messageArea = document.querySelector(".maincontent");
    if(messageArea.innerHTML !== "") {
      var clearButton = document.querySelector('.clearBtn');
      clearButton.addEventListener("click", (e)=>{
        var messages = document.querySelectorAll(".message")
        messages.forEach((message)=>{
          message.remove();
          userMessage.disableButton()
          userMessage.deleteMessages()
      });
    });
  }
}

  userMessage.deleteMessages = function (){
    var deleteButtons = document.querySelectorAll(".deleteBtn");
    deleteButtons.forEach((deleteBtn)=>{
      deleteBtn.addEventListener("click", (e)=>{
        e.target.parentElement.remove()
      })
    })

  }
  console.log("from deleteMessages", userMessage)
  return userMessage;
})(Messages || {})