var Messages = (function () {
  var messageArray;

return {
    getMessages: function (cb) {
      var xhr = new XMLHttpRequest()
      xhr.open('GET', 'messages.JSON')
      xhr.addEventListener('load', function () {
        //this === xhr
        messageArray = JSON.parse(xhr.responseText)
        cb(messageArray)
      })
      xhr.send()
    }
  }
})(Messages||{})