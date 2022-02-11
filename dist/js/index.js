
function currentTime(){
var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var session = "AM";


if(h==0){
    h=12;
}

if(h>12){
    h = h-12;
    session ="PM"
}

h = (h<10) ? "0" + h:h;
m = (m<10) ? "0" + m:m;
s = (s<10) ? "0" + s:s;

document.getElementById("hour").innerHTML= h;
document.getElementById("minute").innerHTML= m;
document.getElementById("second").innerHTML= s;
document.getElementById("session").innerHTML= session;
setTimeout(currentTime, 1000)
}

currentTime();