// Function to handle button clicks (individual buttons and menu items)
function handleButtonClick(functionName) {
  // Get the current display value
  const currentValue = document.querySelector('.display').textContent;

  // Perform the appropriate calculation based on the clicked button/function
  const result = calculate(currentValue, functionName);

  // Update the display with the result
  document.querySelector('.display').textContent = result;
}

// Function to toggle the visibility of the Math menu
function toggleMathMenu() {
  const mathMenu = document.getElementById('mathMenu');
  mathMenu.classList.toggle('hidden');
}

// Event listeners for individual buttons
const individualButtons = document.querySelectorAll('.buttons button:not(#hyp)');
individualButtons.forEach(button => {
  button.addEventListener('click', () => {
    handleButtonClick(button.textContent);
  });
});

// Event listener for the "Math" button
const hypButton = document.getElementById('hyp');
hypButton.addEventListener('click', toggleMathMenu);

// Event listeners for menu items (to be added later)
// ...
