/*

1. click button to activate while loop
2. prompt user
3. user inputs number
4. if number > 0, add to sum
5. dynamically change sum
6. repeat 2-5, 5 times

*/

// !/^\d+$/.test(userInput)

function promptUser(question) {
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // CODE FOR Q1.2
  if (question === "P1") {
    let count = 0;
    let sum = 0;

    // START OF CODE TO BE MARKED FOR Q1.1 -------------------------
    while (count < 5) {
      // prompt user for input
      let userInput = parseInt(prompt("Enter a positive integer: "));
      if (userInput < 0) {
        // alert user to enter valid input
        alert("Please insert a positive number.");
      } else if ( userInput >= 0) {
        count++;
        sum = sum + userInput;
      }
      console.log("Number of iterations: " + count);
      console.log("Total sum of all numbers: " + sum);
    }
    // END OF CODE TO BE MARKED FOR Q1.1 ---------------------------

    // DOM manipulation
    let element = document.getElementById('sum');
    element.innerHTML = sum;
  }
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // CODE FOR Q1.2
  if (question === "P2") {
    let count = 0;
    let biggestInt = 0;

    //console.log("P2 works");

    // START OF CODE TO BE MARKED FOR Q1.2 ---------------------------
    while (count < 5) {
      // prompt user for input
      let userInput = parseInt(prompt("Enter a positive integer: "))
      if (userInput < 0) {
        // alert user to enter valid input
        alert("Please insert a positive number.");
      } else if (userInput >= 0) {
        count++;

        if (userInput > biggestInt) {
          biggestInt = userInput;
        }
      }
      console.log("Number of iterations: " + count);
      console.log("Biggest number: " + biggestInt);
    }
    // END OF CODE TO BE MARKED FOR Q1.2 ---------------------------

    // DOM manipulation
    let element = document.getElementById('biggestInt');
    element.innerHTML = biggestInt;
  }
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // CODE FOR Q1.3
  if (question === "P3") {
    let count = 0;
    let biggestInt = 0;
    let sum = 0;


    console.log("P3 works");

    // START OF CODE TO BE MARKED FOR Q1.3 ---------------------------
    while (count < 5) { 
      // prompt user for input
      let userInput = parseInt(prompt("Enter a positive integer: "))
      if (userInput < 0) {
        // alert user to enter valid input
        alert("Please insert a positive number.");
      } else if (userInput >= 0) {
        // adds 1 to count, adds to sum, sets bigger input when true
        count++;
        sum = sum + userInput;

        if (userInput > biggestInt) {
          biggestInt = userInput;
        }
      }
      console.log("Number of iterations: " + count);
      console.log("Total sum of all numbers: " + sum);
      console.log("Biggest number: " + biggestInt);
    }
    // END OF CODE TO BE MARKED FOR Q1.3 ---------------------------
    
    // DOM manipulation
    let element = document.getElementById('sumTwo');
    element.innerHTML = sum;
    let elementTwo = document.getElementById('biggestIntTwo');
    elementTwo.innerHTML = biggestInt;
  }
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// QUESTION 2

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // CODE FOR Q2.1
  if (question === "P4") {
    // START OF CODE TO BE MARKED FOR Q1.1 -------------------------
    let count = 0;
    let sum = 0;

    for (let i = 0; i < 5; i++) {
      //console.log('This code works')
      let userInput = parseInt(prompt("Enter a positive integer: "));
      if (userInput < 0) {
        // alert user to enter valid input
        alert("Please insert a positive number.");
      } else if ( userInput >= 0) {
        count++;
        sum = sum + userInput;
      }
      console.log("Number of iterations: " + count);
      console.log("Total sum of all numbers: " + sum);
    }
    // END OF CODE TO BE MARKED FOR Q1.1 ---------------------------

    // DOM manipulation
    let element = document.getElementById('sumPartTwo');
    element.innerHTML = sum;
  }
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // CODE FOR Q2.2
  if (question === "P5") {

    //console.log("P2 works");

    // START OF CODE TO BE MARKED FOR Q1.2 ---------------------------
    let count = 0;
    let biggestInt = 0;

    for (let i = 0; i < 5; i++) {
      // prompt user for input
      let userInput = parseInt(prompt("Enter a positive integer: "))
      if (userInput < 0) {
        // alert user to enter valid input
        alert("Please insert a positive number.");
      } else if (userInput >= 0) {
        count++;

        if (userInput > biggestInt) {
          biggestInt = userInput;
        }
      }
      console.log("Number of iterations: " + count);
      console.log("Biggest number: " + biggestInt);
    }
    // END OF CODE TO BE MARKED FOR Q1.2 ---------------------------

    // DOM manipulation
    let element = document.getElementById('biggestIntPartTwo');
    element.innerHTML = biggestInt;
  }
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // CODE FOR Q2.3
  if (question === "P6") {

    //console.log("P6 works");

    // START OF CODE TO BE MARKED FOR Q1.3 ---------------------------
    let count = 0;
    let biggestInt = 0;
    let sum = 0;

    for (let i = 0; i < 5; i++) {
      // prompt user for input
      let userInput = parseInt(prompt("Enter a positive integer: "));
      if (userInput < 0) {
        // alert user to enter valid input
        alert("Please insert a positive number.");
      } else if (userInput >= 0) {
        // adds 1 to count, adds to sum, sets bigger input when true
        count++;
        sum = sum + userInput;

        if (userInput > biggestInt) {
          biggestInt = userInput;
        }
      }
      console.log("Number of iterations: " + count);
      console.log("Total sum of all numbers: " + sum);
      console.log("Biggest number: " + biggestInt);
    }
    // END OF CODE TO BE MARKED FOR Q1.3 ---------------------------
    
    // DOM manipulation
    let element = document.getElementById('sumTwoPartTwo');
    element.innerHTML = sum;
    let elementTwo = document.getElementById('biggestIntTwoPartTwo');
    elementTwo.innerHTML = biggestInt;
  }
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
}

// DOM MANIPULATION CODE
function showQuestTwo() {
  let element = document.getElementById('bigContainer');
  element.innerHTML = `
    <div class="container">
      <div class="header">
        <h1>Question 2.2 (FOR LOOP)</h1>
        <p class="taskDesc">
          Task: Same as Q1.1 but using a for loop.
        </p>
      </div>
      <div class="taskContainer">
        <div class="taskObjective">
          <h3>What will happen</h3>
          <p>Will ask you to input a number 5 times, using a while loop and display sum of all numbers</p>
        </div>
        <div>
          <button onclick="promptUser('P4');">Press to enter your numbers</button>
        </div>
        <div class="stats">
          <p>Sum: <span class="sumPartTwo" id="sumPartTwo">0</span></p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="header">
        <h1>Question 2.2 (FOR LOOP)</h1>
        <p>
          Task: Same as Q1.2 but using a for loop. 
        </p>
      </div>
      <div class="taskContainer">
        <div class="taskObjective">
          <h3>What will happen</h3>
          <p>
            Will ask you to input a number 5 times, using a while loop, 
            then displays the highest number.
          </p>
        </div>
        <div>
          <button onclick="promptUser('P5');">Press to enter your numbers</button>
        </div>
        <div class="stats">
          <p>Biggest Integer: <span class="biggestIntPartTwo" id="biggestIntPartTwo">0</span></p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class "header">
        <h1>Question 2.3 (FOR LOOP)</h1>
        <p>
          Task: Same as Q1.3 but using a for loop.
        </p>
      </div>
      <div class="taskContainer">
        <div class="taskObjective">
          <h3>What will happen</h3>
          <p>Will ask you to input a number 5 times, using a while loop, then 
            display the highest number as well as the sum of all numbers.
          </p>
        </div>
        <div>
          <button onclick="promptUser('P6');">Press to enter your numbers</button>
        </div>
        <div class="stats">
          <p>Sum: <span class="sumTwoPartTwo" id="sumTwoPartTwo">0</span></p>
          <p>Biggest Integer: <span class="biggestIntTwoPartTwo" id="biggestIntTwoPartTwo">0</span></p>
        </div>
      </div>
    </div>
  `;
}

// DOM MANIPULATION CODE
function showQuestOne() {
  let element = document.getElementById('bigContainer');
  element.innerHTML = `
  <div class="container">
  <div class="header">
    <h1>Question 1.1 (WHILE LOOP)</h1>
    <p class="taskDesc">
      Task: Write a program that begins by prompting the user 
      to type in a positive integer (lets call it ). If the 
      number typed () is not positive (i.e. bigger than zero) 
      than it should ask again. After this the program should 
      repeatedly ask the user to type in an integer, until 
      numbers have been typed in. After this the program 
      should print the sum of these numbers. 
    </p>
    </div>
    <div class="taskContainer">
      <div class="taskObjective">
        <h3>What will happen</h3>
        <p>Will ask you to input a number 5 times, using a while loop and display sum of all numbers</p>
      </div>
      <div>
        <button onclick="promptUser('P1');">Press to enter your numbers</button>
      </div>
      <div class="stats">
        <p>Sum: <span class="sum" id="sum">0</span></p>
      </div>

    </div>
  </div>
  <div class="container">
    <div class="header">
      <h1>Question 1.2 (WHILE LOOP)</h1>
      <p>
        Task: Write a program (similar to the one above) that prints 
        the maximum (largest) of the numbers typed in, instead 
        of their sum. 
      </p>
    </div>
    <div class="taskContainer">
      <div class="taskObjective">
        <h3>What will happen</h3>
        <p>
          Will ask you to input a number 5 times, using a while loop, 
          then displays the highest number.
        </p>
      </div>
      <div>
        <button onclick="promptUser('P2');">Press to enter your numbers</button>
      </div>
      <div class="stats">
        <p>Biggest Integer: <span class="biggestInt" id="biggestInt">0</span></p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="header">
      <h1>Question 1.3 (WHILE LOOP)</h1>
      <p>
        Task: Write a program (similar to the above) that prints the 
        maximum and the sum of the numbers typed in. 
      </p>
    </div>
    <div class="taskContainer">
      <div class="taskObjective">
        <h3>What will happen</h3>
        <p>Will ask you to input a number 5 times, using a while loop, then 
          display the highest number as well as the sum of all numbers.
        </p>
      </div>
      <div>
        <button onclick="promptUser('P3');">Press to enter your numbers</button>
      </div>
      <div class="stats">
        <p>Sum: <span class="sumTwo" id="sumTwo">0</span></p>
        <p>Biggest Integer: <span class="biggestIntTwo" id="biggestIntTwo">0</span></p>
      </div>
    </div>
  </div>
  </div>
  `;
}


