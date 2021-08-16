var myFunc = function(id) {
  document.getElementsById(id).style.color=red;
}
var counterE = document.getElementById("energyCounter");
var barE = document.getElementsByClassName("frontBar")[0];
var counterM = document.getElementById("moneyCounter");
var counterI = document.getElementById("itemCounter");
var counterN = document.getElementById("nailsCounter");
var counterW = document.getElementById("woodCounter");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function refreshDisplay() {
  barE.style.width = counterE.innerHTML+"%";
  document.getElementById("itemDisplay").innerHTML = counterI.innerHTML;
  document.getElementById("moneyDisplay").innerHTML = counterM.innerHTML;
}
function buyEnergy() {  
  if (parseInt(counterE.innerHTML) <= 70 && parseInt(counterM.innerHTML) >= 40) {
    counterE.innerHTML = parseInt(counterE.innerHTML) + 30;
    counterM.innerHTML = parseInt(counterM.innerHTML) - 40;
    refreshDisplay();
  }    
}
function exploreWaN() {  
  if (parseInt(counterE.innerHTML) >= 6) {
    counterE.innerHTML = parseInt(counterE.innerHTML) - 6;
    counterW.innerHTML = parseInt(counterW.innerHTML) + 1 + getRandomInt(3);
    counterN.innerHTML = parseInt(counterN.innerHTML) + 2 + getRandomInt(4);
    refreshDisplay();
  }  
}
function craftItem() {  
  if (parseInt(counterE.innerHTML) >= 10 && parseInt(counterW.innerHTML) >= 2 && parseInt(counterN.innerHTML) >= 4) {
    counterE.innerHTML = parseInt(counterE.innerHTML) - 10;
    counterW.innerHTML = parseInt(counterW.innerHTML) - 2;
    counterN.innerHTML = parseInt(counterN.innerHTML) - 4;
    counterI.innerHTML = parseInt(counterI.innerHTML) + 1;
    refreshDisplay();
  }  
}
function sellItem() {  
  if (parseInt(counterI.innerHTML) >= 1) {
    counterM.innerHTML = parseInt(counterM.innerHTML) + 60;
    counterI.innerHTML = parseInt(counterI.innerHTML) - 1;
    refreshDisplay();
  }  
}