function messageTab(){
chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, 'voiceONdrink');
});
}
var interval=0.5;
var time = {minutes: interval, seconds: interval*60};
var count=0;

function reset(){
  count = time.seconds;
}
function done(){
  messageTab();
  reset();
}
function main(){
  count=count-1;
  console.log(count);
  chrome.runtime.sendMessage(count);
  if(count <= 0)
  {done();}
}
setInterval(main, 1000);
