//Function Signature
function functionName(parameter1, parameter2) {
  return parameter1 * parameter2;
}

alert(functionName(2, 3));

function functionWithOutReturn(parameter1, parameter2) {
  alert("Tihs is a function without 'retur' statement");
}
functionWithOutReturn(2, 3, 4);

function functionName2(x, y) {
  if (y === undefined) {
    y = 0;
  }
}
functionName2(3,4);

x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  var i,
    max = 0;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
