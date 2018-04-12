var s = document.createElement('script');
// TODO: add "autovim.js" to web_accessible_resources in manifest.json
s.src = chrome.extension.getURL('./autovim.js');
s.onload = function() {
 //   this.remove();
  /*   
  var url=chrome.runtime.getURL("html/popup.html");
  var evt=document.createEvent("CustomEvent");
  evt.initCustomEvent("yourCustomEvent", true, true, url);
  document.dispatchEvent(evt);
  */
};
(document.head || document.documentElement).appendChild(s);
console.log('injecting...');
