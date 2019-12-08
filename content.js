chrome.runtime.onMessage.addListener(
  function(response, sender, sendResponse){
    if(response == 'drink')
    {window.open("https://jfcoolguyextraordinaire.github.io/resources/hellothere.html");}
});
chrome.runtime.onMessage.addListener(
  function(response, sender, sendResponse){
    if(response == 'voiceONdrink')
    console.log("Message Received");
    sound.play();
});

var msg = document.createElement('audio');
msg.id = 'vpb';
msg.src = 'message.mp3';
document.body.appendChild(msg);
var sound = document.getElementById('vpb');
