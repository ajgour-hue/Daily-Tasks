

var p = document.querySelector('p');
let characters = "Loading";

var text = p.innerText;

p.addEventListener('mouseenter' , function(dets){
  let interval = null;
  let i =0 ;
  interval =setInterval(function(){
 
     const newArr = text.split("").map(function(char , index ){
          return characters.split("")[Math.floor(Math.random()*characters.length)];
     }).join("");

     i++;
 p.innerText = newArr;
 if(i == 5){
    clearInterval(interval);
    p.innerText = text;
 }

  },100);
})

var section = document.querySelector('.section');

section.addEventListener('mousemove' , function(dets){
     document.body.style.setProperty("--x",dets.x+'px');
     document.body.style.setProperty("--y",dets.y+'px');
})