//Author: Satinder Singh

//Generate random number for both dices
var diceNumber1 = Math.floor(Math.random()*6+1);
var diceNumber2 = Math.floor(Math.random()*6+1);

//Debugging purposes to check dice values

// console.log("First Dice Number "+ diceNumber1);
// console.log("Second Dice Number "+ diceNumber2);

//Set Image property
document.querySelector(".img1").setAttribute("src","images/dice"+diceNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+diceNumber2+".png");

if(diceNumber1>diceNumber2){
  //Change content of Heading if player 1 has higher dice value than player 2
  document.querySelector("h1").innerText = "🚩 Player 1 Wins!";
}
else if (diceNumber1<diceNumber2){
  //Change content of Heading if player 2 has higher dice value than player 1
  document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
}
else{
  //Change content of Heading if player 1 has eqaul dice value to player 2
  document.querySelector("h1").innerText = "Draw !";
}
