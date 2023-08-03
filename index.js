// This is a single line command

/*  This is a 
    multiple line 
    command 
*/

// #1 Echoing JavaScript

// // Alerting
// alert("Happy Hacking!");

// // Logging
// console.log(alert);

// //  Addition
// alert(4 * 3);
// console.log(alert);

/* 
    Variable declaration
    var - is a Old Way Of saving the variable 
    let - Its a Modern way of saving the variable 
    const 
*/

// let myName = "vishwa";
// let myMsg = "Hello my name is " + myName + ", I'm Learning JavaScript";
// // alert(msg);
// console.log(myMsg);

// let number1 = 30;
// let number2 = 12;
// let result = number1 * number2;
// console.log(result);
// // alert(result);

// const myCode = "thv07"
// let myCodeName = "My code name is " + myCode + "."
// console.log(myCodeName);

// let myFullName = "vishwa"; // String
// let myAge = 20; // Integer & Number
// let isYoung = true; // Boolean
// let rightNow = undefined; // Undefined
// let goal = null; // Null
// // goal = "unconditional";

/* 
    Rules:
    1. No JS keywords name;
    2. Should not start with Numbers and Uppercase;
    3. Its Case-Sensitive ( myFunction );
    4. No space & No - , _ ;
    5. Use Meaning Full names;
*/

// Function to create the "javaScript" div element with loading effect
function createJavaScriptElement(textContent) {
  // Create a new <div> element with class "javaScript"
  const divElement = document.createElement("div");
  divElement.classList.add("javaScript", "javaScript-loading");

  // Create a new <h1> element with the specified text content
  const h1Element = document.createElement("h1");
  h1Element.textContent = textContent;

  // Append the <h1> element as a child to the <div> element
  divElement.appendChild(h1Element);

  // Simulate the loading time with a delay of 1000ms (1 second)
  setTimeout(() => {
    // Replace the "javaScript-loading" class with "javaScript-loaded"
    divElement.classList.remove("javaScript-loading");
    divElement.classList.add("javaScript-loaded");
  }, 1000);

  // Return the created <div> element
  return divElement;
}

// Get the container element with ID "javaScriptContainer"
const container = document.getElementById("javaScriptContainer");

// Array of texts for the "javaScript" elements
const texts = [
  "Js",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
  "Dynamic",
  "JavaScript",
];

// Create and append "javaScript" div elements to the container
texts.forEach((text) => {
  const javaScriptElement = createJavaScriptElement(text);
  container.appendChild(javaScriptElement);
});
