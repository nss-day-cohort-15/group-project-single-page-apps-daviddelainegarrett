
var Messages = (function(userMessage){
  var messageArea = document.querySelector(".maincontent")
  var clearButton = document.querySelector('.clearBtn');

  userMessage.disableButton = function (messageArray){
      if(messageArray.length === 0) {
        clearButton.setAttribute("disabled", true)
      } else {
        clearButton.removeAttribute("disabled")
      }
    }

  userMessage.deleteMessages = function (messageArray){
    var deleteBtns = document.querySelectorAll(".deleteBtn");
      deleteBtns.forEach((deleteBtn)=>{
        deleteBtn.addEventListener("click", (e)=>{
          var targetIndex =  event.target.parentElement.id;
          var actualIndex = targetIndex.split("-")[1]
          messageArray.splice(actualIndex, 1);
          messageArea.innerHTML = "";
          userMessage.populateMessages(messageArray)
          userMessage.disableButton(messageArray)
          userMessage.fontColor()
        })
      })
    }

  userMessage.clearMessages = function(messageArray){
      clearButton.addEventListener("click", (e)=>{
        var messages = document.querySelectorAll(".message");
        messages.forEach((message)=>{
          message.remove();
        });
        messageArray.splice(0, messageArray.length);
        console.log("from clear messages", messageArray)
        userMessage.disableButton(messageArray)
        userMessage.deleteMessages(messageArray)
      });
  }

  return userMessage;
})(Messages || {})