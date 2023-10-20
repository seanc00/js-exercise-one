/*

1. click button to activate while loop
2. prompt user
3. user inputs number
4. if number > 0, add to sum
5. dynamically change sum
6. repeat 2-5, 5 times

*/

function promptUser(question) {

  if (question = "P1") {
    let count = 0;
    let sum = 0;

    while (count < 5) {
      let userInput = parseInt(prompt("Enter a positive integer: "));
      if (userInput < 0 || userInput === "") {
        alert("Please insert a positive number.")
      } else if ( userInput >= 0) {
        count++;
        sum = sum + userInput;
      }
    }

    let element = document.getElementById('sum');
    element.innerHTML = sum;

    console.log(count);
    console.log(sum);

  }


}


















/* let sum = 0;
let loopOne = "False";
let loopTwo = "False";
let loopThree = "False";
let count = 0;

function loopActive() {
  if (loopOne === "false") {
    alert("Must Enable loop to enter numbers.")
  } else if (loopOne === "True") {
      while (loopOne === "True" && count <= 5) {
        addNumber();
      }
  }
}

function addNumber() {
  let userInput = prompt("Enter a positive number: ");
  if (userInput < 0) {
    alert("Only enter positive numbers.");
    userInput = prompt
  }
  // let userValue = parseInt(document.getElementById("userInput").value);
  // count++;
  // if (userValue < 0 ) {
  //   alert("Enter a positive integer only.");
  // } else if (userValue >= 0) {
  //   sum = sum + userValue;
  // }
  // console.log(sum);
}

/*
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
  
} */