
var Messages = (function(userMessage){
  var messageArea = document.querySelector(".maincontent")
  var deleteBtns = document.querySelectorAll(".deleteBtn");
  var clearButton = document.querySelector('.clearBtn');

  userMessage.disableButton = function (messageArray){
      if(messageArray.length === 0) {
        // console.log("There are no messages")
        clearButton.setAttribute("disabled", true)
      } else {
        clearButton.removeAttribute("disabled")
      }
    }

  userMessage.deleteMessages = function (messageArray){
    // console.log("index", messageArray)
      deleteBtns.forEach((deleteBtn)=>{
        deleteBtn.addEventListener("click", (e)=>{
          console.log(e);
          var targetIndex =  event.target.parentElement.id;
          console.log(targetIndex)
          var current = document.querySelector(`#${targetIndex}`)
          current.remove()
          var actualIndex = targetIndex.split("-")[1]
          messageArray.splice(actualIndex, 1);
          // console.log("???", messageArray)
          messageArea.innerHTML = "";
          userMessage.populateMessages(messageArray)
          userMessage.disableButton(messageArray)
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
        // userMessage.populateMessages(messageArray)
      });
  }

  return userMessage;
})(Messages || {})