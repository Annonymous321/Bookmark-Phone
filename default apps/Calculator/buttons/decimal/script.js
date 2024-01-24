const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const currentNumber = document.getElementById('display').value;
    
    // Check if decimal point is clicked
    if (this.id === "decimal" && !currentNumber.includes(".")) {
      document.getElementById('display').value = currentNumber + this.textContent;
    } else if (this.id !== "decimal") {
      document.getElementById('display').value = currentNumber + this.textContent;
    }
  });
});
