var myFunc = function(id) {
  document.getElementsById(id).style.color=red;
}
buyEnergy = function() {
  var i = document.getElementsById("energyCounter");
  var j = document.getElementsByClassName("frontBar");
  i.innerHTML = parseInt(i.innerHTML) - 20;
  j.style.width = i.innerHTML+"%";
}