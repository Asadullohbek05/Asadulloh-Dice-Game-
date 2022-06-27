var rasm1 =  Math.floor(Math.random()*6);
var rasm2 =  Math.floor(Math.random()*6);



if(rasm1===0 && rasm2===1){
    document.querySelector("h1").innerHTML = "DRAW!"
}

if(rasm1===1 && rasm2===0){
    document.querySelector("h1").innerHTML = "DRAW!"
}





if(rasm1===1){
    document.getElementById("img1").src = "./images/dice1.png";
}
if(rasm1===2){
    document.getElementById("img1").src = "./images/dice2.png";
}
if(rasm1===3){
    document.getElementById("img1").src = "./images/dice3.png";
}
if(rasm1===4){
    document.getElementById("img1").src = "./images/dice4.png";
}
if(rasm1===5){
    document.getElementById("img1").src = "./images/dice5.png";
}
if(rasm1===6){
    document.getElementById("img1").src = "./images/dice6.png";
}


if(rasm2===1){
    document.getElementById("img2").src = "./images/dice1.png";
}
if(rasm2===2){
    document.getElementById("img2").src = "./images/dice2.png";
}
if(rasm2===3){
    document.getElementById("img2").src = "./images/dice3.png";
}
if(rasm2===4){
    document.getElementById("img2").src = "./images/dice4.png";
}
if(rasm2===5){
    document.getElementById("img2").src = "./images/dice5.png";
}
if(rasm2===6){
    document.getElementById("img2").src = "./images/dice6.png";
}


if(rasm1>rasm2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
}

if(rasm1<rasm2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}

if(rasm1===rasm2){
    document.querySelector("h1").innerHTML = "DRAW!"
}