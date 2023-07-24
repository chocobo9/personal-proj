function validateInput(inputElement) {
    // Ensure the input is a positive integer
    const value = parseInt(inputElement.value);
    if (isNaN(value) || value < 0) {
      inputElement.setCustomValidity('Please enter a positive integer.');
    } else {
      inputElement.setCustomValidity('');
    }
  }
  
