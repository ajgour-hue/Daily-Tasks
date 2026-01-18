

var btn = document.querySelectorAll('button');

btn.forEach(function(elem){
  elem.addEventListener('click' , function(){
    //    console.log(elem.innerHTML);
       if(elem.innerHTML == 'Add Friend'){
        elem.innerHTML = 'remove'
       }else{
        elem.innerHTML = 'Add Friend';
       }
    })
})
