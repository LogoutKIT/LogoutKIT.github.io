function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}


var visited = localStorage.getItem('visited');
if (!visited) {
  var name = prompt("Enter your username:")
  while(name !== "Batch 6B"){
    name = prompt("Incorrect, Enter your username:")
    if (name === "Batch 6B") {
      break;
    }
  }
  localStorage.setItem('visited', true);
}
