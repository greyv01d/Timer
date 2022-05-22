function createTimer(){

var theTimeNow = new Date();

var hours = theTimeNow.getHours().toString().length < 2 ? "0" + theTimeNow.getHours() : theTimeNow.getHours();
var minutes = theTimeNow.getMinutes().toString().length < 2 ? "0" + theTimeNow.getMinutes() : theTimeNow.getMinutes();
var seconds = theTimeNow.getSeconds().toString().length < 2 ? "0" + theTimeNow.getSeconds() : theTimeNow.getSeconds();

var digitalWatch = `${hours}:${minutes}:${seconds}`;

document.getElementById("watch").innerHTML = digitalWatch;
}

setInterval(() => {
    createTimer();
}, 1000);

