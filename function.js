const myArray = [1, 2, 3, 4, 5];
document.getElementById("array").innerHTML = "Current Array: " + myArray;

function showArrayLength() {
  const length = myArray.length;
  alert(`Array length: ${length}`);
}

function showArrayToString() {
  const arrayString = myArray.toString();
  alert(`Array as a String: "${arrayString}"`);
}

function showArrayPop() {
  const poppedElement = myArray.pop();
  document.getElementById("array").innerHTML = "Current Array: " + myArray;
  alert(`Popped element: ${poppedElement}, New array: [${myArray}]`);
}
