function handleFormSubmission(event) {
  event.preventDefault();

  const inputs = ['first-name', 'last-name', 'email', 'password'];
  const errorMessages = ['First name cannot be empty.', 'Last name cannot be empty.', 'Email cannot be empty.', 'Password cannot be empty.'];
  
  for (let i = 0; i < inputs.length; i++) {
    const value = document.getElementById(inputs[i]).value;
    const errorMessage = document.getElementById('error-' + inputs[i]);
    if (value === '') {
      errorMessage.textContent = errorMessages[i];
      document.getElementById(inputs[i]).style.borderColor = 'red';

      return;
    }

    errorMessage.textContent = '';
  }
  alert('Form submitted successfully!');
  document.getElementById('myForm').reset();

}

const inputField = document.getElementById('first-name');

const clearErrorMessage = () => {
  const showError = (inputId, errorId) => {
    const inputField = document.getElementById(inputId);
    const errorMessage = document.getElementById(errorId);
    inputField.style.borderColor = '';
    errorMessage.style.display = inputField.value ? 'none' : '';
  }

  showError('first-name', 'error-first-name');
  showError('last-name', 'error-last-name');
  showError('password', 'error-password');
};
