var Messages = (function(userMessage){

  function populateMessages (messageArray) {
    var container = document.querySelector(".maincontent");
    messageArray.forEach((message)=>{
      container.innerHTML +=
      `<div class="message">
       <span class="messageContent"> ${message.message} </span>
       <button class="deleteBtn"> Delete </button>
       </div>`
    })
    userMessage.addMessages(messageArray)
    userMessage.clearMessages()
    userMessage.disableButton()
    userMessage.deleteMessages(messageArray)
  }
  Messages.getMessages(populateMessages);

  userMessage.addMessages = function(messageArray) {
    var inputText = document.querySelector(".textInput");
    var messageArea = document.querySelector(".maincontent")
    inputText.addEventListener("keypress", (e)=>{
      var key = e.which || e.keyCode;
      if (key === 13) {
        messageArray.push({message: inputText.value})
        console.log(messageArray)
        console.log(e)
        messageArea.innerHTML +=
        `<div class="message">
         <span class="messageContent"> ${inputText.value} </span>
         <button class="deleteBtn"> Delete </button>
       </div>`
       inputText.value = "";
      }
      userMessage.disableButton()
      userMessage.clearMessages()
      userMessage.deleteMessages(messageArray)
    })
  }

   return userMessage;
})(Messages || {})



