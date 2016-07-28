var Messages = (function(userMessage){
    var messageArea = document.querySelector(".maincontent");
    var inputText = document.querySelector(".textInput");

  userMessage.populateMessages = function(messageArray) {
    messageArray.forEach((message, index)=>{
      messageArea.innerHTML +=
      `<div class="message" id="message-${index}">
       <span class="messageContent"> ${message.message} </span>
       <button class="deleteBtn btn btn-danger"> Delete </button>
       </div>`
       inputText.value = "";
    })
    userMessage.deleteMessages(messageArray)
    userMessage.addMessages(messageArray)
    userMessage.clearMessages(messageArray)
    userMessage.disableButton(messageArray)
  }
  Messages.getMessages(userMessage.populateMessages);

  userMessage.addMessages = function(messageArray) {
    inputText.addEventListener("keypress", (e)=>{
      var key = e.which || e.keyCode;
      if (key === 13) {
        if (inputText.value !== "") {
          messageArray.push({message: inputText.value})
          messageArea.innerHTML = "";
          userMessage.populateMessages(messageArray)
        }
      }
      userMessage.disableButton(messageArray)
      userMessage.clearMessages(messageArray)
      userMessage.fontColor()
    })
  }

   return userMessage;
})(Messages || {})

