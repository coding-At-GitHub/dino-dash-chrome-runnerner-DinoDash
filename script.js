const dino = document.getElementById("dino"); const cactus =
document.getElementById("cactus"); function jump() { if (dispatchEvent.classList
!= "jump") { //first it checks if the dino is mid-jump. If not, it makes it
jump. dino.classList.add("jump"); setTimeout(function () {
dino.classList.remove("jump"); //removes the jump class from the dino once it
has jumped so that it can jump again }, 300); } } let checkAlive =
setInterval(function () { let dinoTop = parseInt(
window.getComputedStyle(dino).getPropertyValue("top") ); let cactusLeft =
parseInt( window.getComputedStyle(cactus).getPropertyValue("left") ); //check
for collision if (cactusLeft > 0 && cactusLeft < 70 && dinoTop >= 143) {
dino.style.animationPlayState = "paused"; cactus.style.animationPlayState =
"paused"; alert("Whoops! Game Over :("); window.location.reload(); } }, 10);
document.addEventListener("keydown", function (event) { jump(); });

PWA progressive web apps
SSR server side rendering

use transition 
use persistence 
use imperative
forward ref
redux toolkit 
node js
express js
mongo db queries 
sql queries 
databases
leet code 
React 
DSA 
oops java
RPA UI path 

web app php- node
mobile app
desktop app jav
react
redux toolkit
javascript
Typescript 

tailwind css
material ui css
angular material
node js
experienc
backend

devops
node backend
express
js
