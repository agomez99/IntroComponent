function handleFormSubmission(event) {
  event.preventDefault();

  const inputs = ['first-name', 'last-name', 'email', 'password'];
  const errorMessages = ['First name cannot be empty.', 'Last name cannot be empty.', 'Email cannot be empty.', 'Password cannot be empty.'];
  const errorIcons = ['.error-icon', '.error-icon2', '.error-icon3'];

  for (let i = 0; i < inputs.length; i++) {
    const value = document.getElementById(inputs[i]).value;
    const errorMessage = document.getElementById('error-' + inputs[i]);
    const errorIcon = document.querySelector(errorIcons[i]);

    if (value === '') {
      errorMessage.textContent = errorMessages[i];
      document.getElementById(inputs[i]).style.borderColor = 'red';
      errorIcon.style.visibility = "visible";
      return;
    }
    errorMessage.textContent = '';
    document.getElementById(inputs[i]).style.borderColor = '';
    errorIcon.style.visibility = "hidden";

  }


  alert('Form submitted successfully!');

  document.getElementById('myForm').reset();
  clearErrorMessage();
}



const clearErrorMessage = () => {
  const showError = (inputId, errorId, errorIcon) => {
    const inputField = document.getElementById(inputId);
    const errorMessage = document.getElementById(errorId);
    const errorIcons = document.getElementById(errorIcon);

    inputField.style.borderColor = '';
    errorMessage.style.display = inputField.value ? 'none' : '';
    errorIcons.style.visibility = 'hidden';

  showError('first-name', 'error-first-name');
  showError('last-name', 'error-last-name');
  showError('password', 'error-password');
  showError('email', 'error-email');l
};

}
