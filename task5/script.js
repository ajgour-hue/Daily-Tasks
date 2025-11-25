
var start = document.querySelector('#start');
var pause = document.querySelector('#pause');
var reset = document.querySelector('#reset');
var minElement = document.querySelector('#min');
var secElement = document.querySelector('#sec');

let min = 0;
let sec = 0 ;
let interval = null;

function runTimer(){
     sec ++ ;
     if(sec == 60){
        min++;
        sec = 0 ;
     }
    minElement.innerHTML = min < 10 ? "0" + min : min;
    secElement.innerHTML = sec < 10 ? "0" + sec : sec;
}

start.addEventListener('click' ,function(){
    if(interval == null){
        interval = setInterval(runTimer,1000);
        start.style.opacity = 0.5;
        start.disabled = true;
    }
})

pause.addEventListener('click' , function(){
     clearInterval(interval);
     interval = null;
      start.disabled = false;
        start.style.opacity  = 1;
})

reset.addEventListener('click' , function(){
     clearInterval(interval);
     interval =  null;
     start.disabled = false;
       start.style.opacity  = 1;
       min = 0 ;
        sec = 0;
       minElement.innerHTML = "00";
       secElement.innerHTML = "00";
})