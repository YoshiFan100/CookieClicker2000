var autoclick;
var click = function(){
    document.getElementById("bigCookie").click();
};

var object = document.getElementById("bigCookie");

object.onmouseover = function() {autoclick = setInterval(click, 100);};
object.onmouseout = function() {clearInterval(autoclick);};
