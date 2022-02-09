
function currentTime(){
var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var session = "AM";

document.getElementById("dclock").innerHTML= h+":"+m+":"+s+" "+session;

setTimeout(currentTime, 1000)
}

currentTime();