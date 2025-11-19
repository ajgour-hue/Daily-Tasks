
var btn = document.querySelector('button');
var h2 = document.querySelector('h2');
var inner = document.querySelector('#inner');


btn.addEventListener('click',function(){
// isko m istemal kar rha hoon taaki download bn par baar baar click na karne par block ho
    btn.style.pointerEvents = 'none';

    var num = 50 + Math.floor(Math.random()*50);
       console.log('Your file will be downloaded in',num/10,'seconds');

   var a = 0 ;
var int = setInterval(function(){
  a++;
  h2.innerHTML = a+'%';
  inner.style.width = a+'%';
},num);


setTimeout(function(){
    clearInterval(int);
    btn.innerHTML = 'Downloaded';
    btn.style.opacity = 0.5;
},num*100);

})
