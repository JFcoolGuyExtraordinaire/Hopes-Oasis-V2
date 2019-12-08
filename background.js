function messageTab(){
chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, 'drink');
});
}

var time=0;
var interval=0;
