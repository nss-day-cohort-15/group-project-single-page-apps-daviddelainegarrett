var Messages = (function () {
  var messageArray;

return {
    getMessages: function (cb) {
      var xhr = new XMLHttpRequest()
      xhr.open('GET', 'messages.JSON')
      xhr.addEventListener('load', function () {
        messageArray = JSON.parse(xhr.responseText).messages
        cb(messageArray)
      })
      xhr.send()
    }
  }
})(Messages||{})
