

var Messages = (function () {

return {
    getMessages: function (cb) {
      var xhr = new XMLHttpRequest()
      xhr.open('GET', 'messages.json')
      xhr.addEventListener('load', function () {
        //this === xhr
         = JSON.parse(xhr.responseText)
        cb()
      })
      xhr.send()