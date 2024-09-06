
function cmToInches(cm) {
  let inches = cm * 0.3937007874;
  return inches.toFixed(2);
}

function clearInput(){
  document.getElementById("meters").value = "";
  document.getElementById("result").innerHTML = "";
}