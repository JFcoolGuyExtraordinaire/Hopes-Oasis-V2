var time=0;
var count=0;
var interval=20;

function timeStart(){
  time = {minutes: interval, seconds: interval*60};
  count = time.seconds;
}
function drink(){
chrome.runtime.
}
function main(){
  if(count == 0)
  {drink(); timeStart();} //cycle keeping

  count=count-1;

  displayMin=Math.round(count/60)-1;
  if(count < 60)
  {displayMin=0;}
  displaySec=count%60;
}

voiceSwitch();
document.getElementById('voiBut').addEventListener("click", voiceSwitch);
setInterval(main, 1000);
