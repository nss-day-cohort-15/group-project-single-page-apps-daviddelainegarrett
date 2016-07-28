
var Messages = (function(userMessage){

  userMessage.disableButton = function (){
    var clearButton = document.querySelector('.clearBtn');
    var messageArea = document.querySelector(".maincontent");
      // console.log("message area", messageArea.innerHTML)
      if(messageArea.innerHTML === "") {
        console.log("There are no messages")
        clearButton.setAttribute("disabled", true)
        clearButton.classList.add("disabled")
      } else {
        clearButton.removeAttribute("disabled")
        clearButton.classList.remove("disabled")
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

  userMessage.deleteMessages = function (messageArray){
    var deleteButtons = document.querySelectorAll(".deleteBtn");
    deleteButtons.forEach((deleteBtn)=>{
      deleteBtn.addEventListener("click", (e)=>{
        e.target.parentElement.remove()
        for(var i=0; i<messageArray.length; i++){
          console.log("message", messageArray[i].message)
          console.log(e.target.parentNode.firstElementChild.innerText)
        if(messageArray[i].message == e.target.parentNode.firstElementChild.innerText){
            messageArray.splice(i, 1);  //removes 1 element at position i
            break;
          }
        }
        console.log(messageArray)
        // console.log(e)
        userMessage.disableButton()
      })
    })

  }
  console.log("from deleteMessages", userMessage)
  return userMessage;
})(Messages || {})