// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const userInput1 = document.getElementById("userInput1");
const copyButton = document.getElementById("copy");
const output1 = document.querySelector(".output");

copyButton.addEventListener("click", () => {
    output1.textContent = userInput1.value;
  });

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const userInput2 = document.getElementById("userInput2");
const inputEventExample = document.querySelector("#inputEventExample p");


userInput2.addEventListener("input", () => {
    inputEventExample.textContent = userInput2.value;
  });
