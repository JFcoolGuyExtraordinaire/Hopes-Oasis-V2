document.addEventListener("DOMContentLoaded", function(){
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
});
