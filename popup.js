document.addEventListener("DOMContentLoaded", function(){
//updates popup timer elements
  chrome.runtime.onMessage.addListener(
    function(response, sender, sendResponse){
      if (typeof response == 'number'){
        if(Math.floor(response/60) >= 10)
        {document.getElementById('minutes').innerHTML = Math.floor(response / 60);}
        else{document.getElementById('minutes').innerHTML = '0' + Math.floor(response / 60).toString();}
      if(Math.floor(response%60) >= 10)
      {document.getElementById('seconds').innerHTML = Math.floor(response % 60);}
      else{document.getElementById('seconds').innerHTML = '0' + Math.floor(response % 60).toString();}
    }
  });
//extension button press comms
  document.getElementById('butt').addEventListener('click', function(){
    chrome.runtime.sendMessage('voiceswitched');
  });
//BG switch change receiver
  chrome.runtime.onMessage.addListener(
    function(response, sender, sendresponse){
      if(response == 'VPBtrue')
      {document.getElementById('butt').className = 'voiceSwitchON'; document.getElementById('pbswitch').innerHTML = 'Voice Playback: ON';}
      if(response == 'VPBfalse')
      {document.getElementById('butt').className = 'voiceSwitchOFF'; document.getElementById('pbswitch').innerHTML = 'Voice Playback: OFF';}
    });
});
