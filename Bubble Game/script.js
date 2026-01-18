

function startGame(){
    


// score badahao.....
var score = 0;
function increseScore() {
    score += 10;
    document.querySelector('#Score').textContent = `Score: ${score}`;
    updateScore(score);
}


// naya element 
var rn = 0;
function getNewHit() {
    rn = Math.floor(Math.random() * 10);
    document.querySelector('#hit').textContent = `Hit: ${rn}`;
}

getNewHit();


// naya bubble baanae k liye
function setBubble() {
    var clutter = '';
    var num = 0;
    for (var i = 0; i <= 111; i++) {
        num = Math.floor(Math.random() * 10);
        clutter += `<div class="gola">${num}</div>`;
    }

    document.querySelector('.bottom-section').innerHTML = clutter;
}
setBubble();


// time k l iye ....
var timer = 15;
function setTimer() {
    var intervalId = setInterval(function () {
        if (timer > 0) {
            timer--;
            var timerVal = document.querySelector('#timerVal').textContent = `Timer : ${timer}`;
        }
        else {
            clearInterval(intervalId);
            document.querySelector('.bottom-section').innerHTML = `<div id="end">
            <h1 > Game Over !!</h1> </div>`;
        }
    }, 1000)
}
setTimer();



// event bubbling
// matalab parent ke prent ko call karta rehta hain baar bar
document.querySelector('.bottom-section')
    .addEventListener('click', function (dets) {

        if (rn === Number(dets.target.textContent)) {

            increseScore();
            setBubble();
            getNewHit();

        }

    })
    


    
let highScore = Number(localStorage.getItem("highScore")) || 0;
const highScoreElement = document.querySelector('#high-score');

highScoreElement.textContent = `High-Score : ${highScore}`;

function updateScore(currentScore) {
    if (currentScore > highScore) {
        highScore = currentScore;
        localStorage.setItem("highScore", highScore);
        highScoreElement.textContent = `High-Score : ${highScore}`;
    }
}

}



document.querySelector("#startBtn").addEventListener("click", function () {
    let userName = document.querySelector("#nameInput");
    let userAge = document.querySelector("#ageInput");

    if (userName === "" || userAge === "") {
        alert("Please enter both Name and Age");
        return;
    }

     localStorage.setItem("userName", userName);
    localStorage.setItem("userAge", userAge);
    localStorage.setItem("userSaved", "true");
    
    document.querySelector("#userinfo").style.display = "none";

    
    document.querySelector("main").style.display = "flex";

    

    
    startGame();
});


if (localStorage.getItem("userSaved") === "true") {
    
    document.querySelector("#userinfo").style.display = "none";
    
    document.querySelector("main").style.display = "flex";
    
    startGame();
}
