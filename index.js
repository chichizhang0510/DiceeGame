function rollDice(){
    var n = Math.random();
    n = Math.floor(n*5+1);
    return n;
}

function changePic(num, dice){
    if (num===1){
        document.querySelector(dice).setAttribute("src", "images/dice1.png");
    } else if (num===2){
        document.querySelector(dice).setAttribute("src", "images/dice2.png");
    } else if (num===3){
        document.querySelector(dice).setAttribute("src", "images/dice3.png");
    } else if (num===4){
        document.querySelector(dice).setAttribute("src", "images/dice4.png");
    } else if (num===5){
        document.querySelector(dice).setAttribute("src", "images/dice5.png");
    } else if (num===6){
        document.querySelector(dice).setAttribute("src", "images/dice6.png");
    }
}

play1 = rollDice();
play2 = rollDice();

changePic(play1, ".p1");
changePic(play2, ".p2");


// if (play1===play2){

// } else if (play1 < play2){

// } else {
    
// }