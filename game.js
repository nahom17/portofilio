let list = document.getElementById("gussed");
let life = document.getElementById("chance");
let input = document.getElementById("number");
let HiddenNumber =77;
let gameOver = 0;
let emoij = ("your Enterd numbers is");
let like = document.getElementById("like");
let userName = document.getElementById("name");
window.onload = function(){
    input.addEventListener("keyup",respondtoenter);
}

function respondtoenter(event) {
    event.which = event.which || event.keyCode;
    if(event.which == 13) {
        // submit
        
        if (input.value != HiddenNumber) {
            life.innerHTML = parseInt(life.innerHTML) - 1 ;
            list.innerHTML = list.innerHTML + like.innerHTML + '<li>' + input.value + '</li>';
            input.value = "";
            
        
        } 
            
         else {
            alert("wow you are perfect you got the Hidden Number");
            input.value = "";
            userName.value = "";
        }
    }

    if (life.innerHTML <= gameOver) {
        confirm(`hey ${userName.value} sorry you did not guess the secret number at given time please click ok to start new game`);
        life.innerHTML = parseInt(life.innerHTML) + 5 ;
        
    }
}