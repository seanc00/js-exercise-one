let sum = 0;
loopOne = "False";
loopTwo = "False";
loopThree = "False";

function addNumber() {
  let userValue = parseInt(document.getElementById("userInput").value);
  sum = sum + userValue;

  console.log(sum);  
}

// Code that activates while loops for all questions
function activateWhileLoop(loopType) {
  // change class and text to indicate to use loop is active
  let element = document.getElementById('loopStatus');
  element.className = 'loopStatusOn';
  element.innerHTML = "ON";
  // if statements changing each question while loop status seperately
  if (loopType === "q1") {
    loopOne = "True";
    console.log(loopOne);
  }
  if (loopType === "q2") {
    loopTwo = "True";
    console.log(loopTwo);
  }
  if (loopType === "q3") {
    loopThree = "True";
    console.log(loopThree);
  }
}
function deactivateWhileLoop(loopType) {
    // change class and text to indicate to use loop is active
    let element = document.getElementById('loopStatus');
    element.className = 'loopStatusOff';
    element.innerHTML = "OFF";
  if (loopType === "q1") {
    loopOne = "False";
    console.log(loopOne);
  }
  if (loopType === "q2") {
    loopTwo = "False";
    console.log(loopTwo);
  }
  if (loopType === "q3") {
    loopThree = "False";
    console.log(loopThree);
  }
  
}