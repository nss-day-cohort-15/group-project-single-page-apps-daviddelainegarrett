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
  }
  Messages.getMessages(populateMessages);
  // function addMessages (userInput) {

  // }
})(Messages || {})