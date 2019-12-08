chrome.runtime.onMessage.addListener(
  function(response, sender, sendResponse){
    if(response == 'drink')
    {window.open("https://jfcoolguyextraordinaire.github.io/resources/hellothere.html");}
});
