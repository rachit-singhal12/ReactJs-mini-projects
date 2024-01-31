var randomNumber1 = Math.floor(Math.random()*6) + 1;
var diceImage = "images/dice"+randomNumber1 +".png";
document.querySelectorAll("img")[0].setAttribute("src",diceImage)

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var diceImage2 = "images/dice"+randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",diceImage2)

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 is win"
  document.querySelector("h1").style.color = "Green";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 2 is win"
  document.querySelector("h1").style.color = "Green";
}
else{
  document.querySelector("h1").innerHTML="Game Draw";
}