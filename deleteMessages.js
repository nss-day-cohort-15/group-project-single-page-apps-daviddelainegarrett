
var Messages = (function(userMessage){

  userMessage.disableButton = function (messageArray){
    var clearButton = document.querySelector('.clearBtn');
      if(messageArray.length === 0) {
        console.log("There are no messages")
        clearButton.setAttribute("disabled", true)
        clearButton.classList.add("disabled")
      } else {
        clearButton.removeAttribute("disabled")
        clearButton.classList.remove("disabled")
      }
    }

  userMessage.deleteMessages = function (messageArray){
    console.log("index", messageArray)
    var deleteButtons = document.querySelectorAll(".deleteBtn");
    var messageArea = document.querySelector(".maincontent")
    deleteButtons.forEach((deleteBtn)=>{
      deleteBtn.addEventListener("click", (e)=>{
        // e.target.parentElement.remove()
        var targetIndex =  e.target.id;
        console.log(">>>>>>>", targetIndex);
        var current = document.querySelector(`#${targetIndex}`)
        current.parentElement.remove()
        var actualIndex = targetIndex.split("-")[1]
        messageArray.splice(actualIndex, 1);
        console.log("???", messageArray)
        messageArea.innerHTML = "";
        userMessage.populateMessages(messageArray)
        userMessage.disableButton(messageArray)
      })
    })

  }

  userMessage.clearMessages = function(messageArray){
    var messageArea = document.querySelector(".maincontent");
      var clearButton = document.querySelector('.clearBtn');
      clearButton.addEventListener("click", (e)=>{
        var messages = document.querySelectorAll(".message");
        messages.forEach((message)=>{
          message.remove();
       });
        messageArray.splice(0, messageArray.length);
        userMessage.disableButton(messageArray)
        userMessage.deleteMessages(messageArray)
        userMessage.populateMessages(messageArray)
      });
  }


  return userMessage;
})(Messages || {})