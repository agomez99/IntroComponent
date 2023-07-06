function handleFormSubmission(event) {
  event.preventDefault();

  const inputs = ['first-name', 'last-name', 'email', 'password'];
  const errors = ['icon1', 'icon2','icon3'];
  const errorMessages = ['First name cannot be empty.', 'Last name cannot be empty.', 'Email cannot be empty.', 'Password cannot be empty.'];

  for (let i = 0; i < inputs.length; i++) {
    const value = document.getElementById(inputs[i]).value;
    const errorMessage = document.getElementById('error-' + inputs[i]);
    const errorsIcon = document.getElementById('error-' +inputs[i])
    var errorIcon = document.querySelector(".error-icon");


    if (value === '') {
      errorMessage.textContent = errorMessages[i];
      document.getElementById(inputs[i]).style.borderColor = 'red';

      errorIcon.style.visibility = "visible";
      errorsIcon.style.visibility = "visible";

      return;
      
    }
    errorMessage.textContent = '';
    errorIcon.style.visibility = "hidden";

        
      if (value === "") {
        errorIcon.style.visibility = "visible";
      } else {
        errorIcon.style.visibility = "hidden";
      }
      }
      alert('Form submitted successfully!');
      document.getElementById('myForm').reset();

    }

const inputField = document.getElementById('first-name');

const clearErrorMessage = () => {
  const showError = (inputId, errorId) => {
    const inputField = document.getElementById(inputId);
    const errorMessage = document.getElementById(errorId);
   const errorIcon = document.querySelector(".error-icon");

    inputField.style.borderColor = '';
    errorMessage.style.display = inputField.value ? 'none' : '';
    errorIcon.style.visibility = "hidden";

  }

  showError('first-name', 'error-first-name');
  showError('last-name', 'error-last-name');
  showError('password', 'error-password');
};
