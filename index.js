
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomImage1 = "images/dice"+randomNumber1+".png"
var imageChange = document.querySelectorAll("img")[0];
imageChange.setAttribute("src",randomImage1);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomImage2 = "images/dice"+randomNumber2+".png";
var imageChange2 =document.querySelectorAll("img")[1];
imageChange2.setAttribute("src",randomImage2);

var imageNumber1 = randomNumber1;
var imageNumber2 = randomNumber2;
if (imageNumber1 > imageNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Win";
}
else if (imageNumber1 < imageNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Win";
}
else if (imageNumber2 == imageNumber2){
   document.querySelector("h1").innerHTML = "draw!";
}
else
{
    document.querySelector("h1").innerHTML = "Refresh me"; 
}

