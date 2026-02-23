import { API_KEY } from "./config.js";

// VULNERABILITY: innerHTML with user input
function displayMessage(userInput) {
  document.getElementById("output").innerHTML = userInput;
}

// Fixed: Safe math expression evaluator instead of eval()
function calculate(expression) {
  // Only allow numbers, basic operators, parentheses, and whitespace
  const safePattern = /^[\d+\-*/().\s]+$/;
  
  if (!safePattern.test(expression)) {
    throw new Error("Invalid characters in expression");
  }
  
  // Use Function constructor with limited scope (safer than eval)
  // No access to global scope or variables
  try {
    return Function('"use strict"; return (' + expression + ')')();
  } catch (e) {
    throw new Error("Invalid mathematical expression");
  }
}

// Wire up the poll form
document.getElementById("poll-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const response = document.getElementById("response").value;
  displayMessage(`You said: ${response}`);
});

document.getElementById("calc-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const expr = document.getElementById("expression").value;
  try {
    const result = calculate(expr);
    document.getElementById("calc-result").textContent = result;
  } catch (error) {
    document.getElementById("calc-result").textContent = "Error: " + error.message;
  }
});
