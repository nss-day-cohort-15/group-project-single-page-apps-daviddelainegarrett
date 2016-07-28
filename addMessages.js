var Messages = (function(userMessage){

  userMessage.populateMessages = function(messageArray) {
    var container = document.querySelector(".maincontent");
    var inputText = document.querySelector(".textInput");
    messageArray.forEach((message, index)=>{
      container.innerHTML +=
      `<div class="message>
       <span class="messageContent"> ${message.message} </span>
       <button class="deleteBtn" id="message-${index}"> Delete </button>
       </div>`
       inputText.value = "";
    })
    userMessage.deleteMessages(messageArray)
    userMessage.addMessages(messageArray)
    userMessage.clearMessages()
    userMessage.disableButton(messageArray)
  }
  Messages.getMessages(userMessage.populateMessages);

  userMessage.addMessages = function(messageArray) {
    var inputText = document.querySelector(".textInput");
    var messageArea = document.querySelector(".maincontent")
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
      userMessage.clearMessages()
      userMessage.deleteMessages(messageArray)
    })
  }

   return userMessage;
})(Messages || {})



