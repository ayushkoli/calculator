const display = document.getElementById("display");

// Function to play sound
function playSound() {
  const sound = new Audio("click.mp3"); // Path to your sound file
  sound.play();
}

function gotodisplay(input) {
  playSound(); // Play sound on input
  display.value += input;
  adjustFontSize(); // Adjust font size after each input
}

function equals() {
    try {
      playSound(); // Play sound on equals
      let result = eval(display.value); // Evaluate the expression in the display
      // Round to 4 decimal places if the result is a decimal number
      if (result % 1 !== 0) {
        result = result.toFixed(4);
      }
      display.value = result; // Display the result
    } catch (error) {
      display.value = "error"; // Display "error" for invalid input
      setTimeout(() => {
        display.value = ""; // Clear the display after 2 seconds
      }, 1500);
    }
    adjustFontSize(); // Adjust font size after evaluation
  }
  

function cleardisplay() {
  playSound(); // Play sound on clear
  display.value = ""; // Clear the display
  adjustFontSize(); // Adjust font size after clearing
}

function adjustFontSize() {
  const maxLength = 12; // Set the maximum number of characters that can fit
  const fontSize = Math.max(30, 50 - display.value.length); // Dynamically adjust font size
  display.style.fontSize = `${fontSize}px`; // Apply the new font size
}

document.addEventListener("keydown", function keypressed(event) {
  switch (event.key) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      gotodisplay(event.key); // Simplify numeric cases
      break;
    case "+":
    case "-":
    case "*":
    case "/":
    case "%":
    case "(":
    case ")":
    case ".":
      gotodisplay(event.key); // Simplify operator cases
      break;
    case "=":
    case "Enter": // Handle both "=" and Enter for equals
      equals();
      break;
    case "c":
    case "C": // Allow "C" or "c" to clear the display
      cleardisplay();
      break;
    case "Backspace": // Support Backspace to delete the last character
      playSound(); // Play sound on backspace
      display.value = display.value.slice(0, -1);
      adjustFontSize(); // Adjust font size after backspace
      break;
    default:
      break; // Ignore other keys
  }
});

function deleteLast() {
  if (display.value.length > 0) {
    display.value = display.value.slice(0, -1); // Remove the last character
    playSound(); // Optional: Play sound for delete
    adjustFontSize(); // Adjust font size after delete
  }
}
