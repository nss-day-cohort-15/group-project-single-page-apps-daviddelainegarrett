var Messages = (function(userMessage){

  function populateMessages (messageArray) {
    var container = document.querySelector(".maincontent");
    var messages = messageArray.messages
    messages.forEach((message)=>{
      container.innerHTML +=
      `<div class="message">
       <span class="messageContent table table-hover"> ${message.message} </span>
       <button type ="button" class="deleteBtn btn btn-danger"> Delete </button>
       </div>`
    })
    userMessage.addMessages()
  }
  Messages.getMessages(populateMessages);

  userMessage.addMessages = function() {
    var inputText = document.querySelector(".textInput");
    var messageArea = document.querySelector(".maincontent")
    inputText.addEventListener("keypress", (e)=>{
      var key = e.which || e.keyCode;
      if (key === 13) {
        messageArea.innerHTML +=
        `<div class="message">
         <span class="messageContent"> ${inputText.value} </span>
         <button type ="button" class="deleteBtn btn btn-danger"> Delete </button>
       </div>`
       inputText.value = "";
      }
      userMessage.disableButton()
      userMessage.clearMessages()
      userMessage.deleteMessages()
    })
  }

   return userMessage;
})(Messages || {})



