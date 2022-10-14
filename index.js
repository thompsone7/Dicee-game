var name=prompt("what is your name");
document.querySelector(".dice .p1").innerHTML= name

var randomNumber1=Math.floor(Math.random() * 6) + 1;
var image1=document.querySelector(".img1").setAttribute("src", "images/dice"+ randomNumber1 +".png");

var randomNumber2=Math.floor(Math.random() * 6) + 1;
var image2= document.querySelector(".img2").setAttribute("src", "images/dice"+ randomNumber2 +".png");



if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML=name+ " wins!👏"
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML="Computer wins!👏"
}
else{
  document.querySelector("h1").innerHTML="Draw"
}
