// ==UserScript==
// @name          Bookmark Launcher
// @description   Launches bookmakrs with keyboard shortcuts
// ==/UserScript==

function enable_vim() {
  var turn_on = function (e) {
    //console.log('Enable vimMode');
    // If I receive focus again...
    e.CodeMirror.on("focus", function(cm) {
      console.log(cm);
      e.CodeMirror.setOption("vimMode", true);
      e.CodeMirror.options.keyMap = 'vim';
      e.CodeMirror.options.showCursorWhenSelecting = 'vim';
    });
    // In case I already have focus...
    setTimeout(function(){
      e.CodeMirror.setOption("vimMode", true);
      e.CodeMirror.options.keyMap = 'vim';
      e.CodeMirror.options.showCursorWhenSelecting = 'vim';
    },200);
  }
  document.querySelectorAll(".CodeMirror").forEach(function(e){ turn_on(e); });
}

CodeMirror.defineInitHook(enable_vim);
console.log('injected...');
setTimeout(enable_vim, 1000);

var bookmarkLauncherSetup = (function() {
    var bookmarks = {}, url;

    bookmarks['V'] = enable_vim;

    window.addEventListener('keyup', function() {
      console.log('pressed a key');
        if(event.ctrlKey && event.altKey && !event.shiftKey)
            if(exec = bookmarks[String.fromCharCode(event.keyCode)]) {
              exec();
            }
    });
}());


document.addEventListener('yourCustomEvent', function (e)
{
    var url=e.detail;
    console.log("received "+url);
});
