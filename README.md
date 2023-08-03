# JavaScript Loading Effect with Spinner

![Loading Effect with Spinner](Loading%20Effect%20with%20Spinner.png)

This is a simple HTML, CSS, and JavaScript code that demonstrates a loading effect with a spinner animation. The loading effect is applied to a set of "javaScript" div elements that represent different JavaScript-related topics. When the page loads, each "javaScript" element is initially shown with a loading spinner, and after a delay, the content fades in.

## How it works

- The HTML file contains a `<div>` element with the class "javaScript_box" and the ID "javaScriptContainer" where the "javaScript" elements will be appended.

- The CSS file adds styling to create the loading spinner and defines the animation for the spinner rotation. It also sets the initial state of the "javaScript" elements to be hidden (opacity 0) and fade them in when they are ready.

- The JavaScript code includes a function called "createJavaScriptElement(textContent)" that creates a "javaScript" div element with a loading spinner and the specified text content. It appends an `<h1>` element inside the "javaScript" div to display the text.

- The "createJavaScriptElement" function simulates a loading delay of 2 seconds using `setTimeout` before removing the "javaScript-loading" class and adding the "javaScript-loaded" class to the element. This class transition triggers the fade-in animation.

- An array called "texts" contains the text content for each "javaScript" element. The code iterates through this array, calls the "createJavaScriptElement" function for each text, and appends the resulting elements to the "javaScriptContainer" div.


