//message current browser tab
function messageTab(){
chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, 'drink');
});
}
//declarations
var interval=20;
var time = {minutes: interval, seconds: interval*60};
var count=0;
var swtch=1;

//injects audio into background page
var msg = document.createElement('audio');
msg.id = 'hopeoasisvoiceplayback';
msg.src = 'message.mp3';
document.body.appendChild(msg);
var sound = document.getElementById('hopeoasisvoiceplayback');
//

//voiceSwitch button reciever/sender
chrome.runtime.onMessage.addListener(
  function(response, sender, sendResponse){
    if(response == 'voiceswitched')
    {
      swtch = swtch * -1;
      if(swtch == 1)
      {chrome.runtime.sendMessage('VPBtrue');}
      else{chrome.runtime.sendMessage('VPBfalse');}
    }
});

//resets timer
function reset(){
  count = time.seconds;
}

//plays at end of timer
function done(){
  messageTab();
  if(swtch == 1)
  {sound.play();}
  reset();
}

//main loop
function main(){
  count=count-1;
  console.log(count);
  chrome.runtime.sendMessage(count);
  if(count <= 0)
  {done();}
}

reset();
setInterval(main, 1000);
