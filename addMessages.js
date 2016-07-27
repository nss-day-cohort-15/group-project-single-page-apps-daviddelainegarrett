var Messages = (function(userMessage){

  function populateMessages (messageArray) {
    var container = document.querySelector(".maincontent");
    var messages = messageArray.messages
    console.log(messages)
    messages.forEach((message)=>{
      container.innerHTML +=
      `<div class="message">
       <span class="messageContent"> ${message.message} </span>
       <button class="deleteBtn"> Delete </button>
       </div>`
    })
    addMessages()
  }
  Messages.getMessages(populateMessages);

  function addMessages (userInput) {
    var inputText = document.querySelector(".textInput");
    var messageArea = document.querySelector(".maincontent")
    inputText.addEventListener("keypress", (e)=>{
      var key = e.which || e.keyCode;
      if (key === 13) {
        messageArea.innerHTML +=
        `<div class="message">
         <span class="messageContent"> ${inputText.value} </span>
         <button class="deleteBtn"> Delete </button>
       </div>`
      }
    })
  }

})(Messages || {})



