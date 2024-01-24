const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const currentNumber = document.getElementById('display').value;
    document.getElementById('display').value = currentNumber + this.textContent;
  });
});
