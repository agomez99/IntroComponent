window.addEventListener('DOMContentLoaded', function() {
  const formInputs = {
    firstName: document.getElementById('firstName'),
    lastName: document.getElementById('lastName'),
    email: document.getElementById('email'),
    password: document.getElementById('password')
  };

  Object.values(formInputs).forEach((input) => {
    input.addEventListener('input', clearError);
  });

  function clearError(event) {
    const inputElement = event.target;
    const errorElement = document.getElementById(inputElement.id + 'Error');
    const iconElement = document.getElementById(inputElement.id + 'Icon');
    const borderElement = document.getElementById(inputElement.id);

    errorElement.textContent = '';
    iconElement.style.display = 'none';
    borderElement.style.border = '1px solid #ccc';
    inputElement.classList.remove('error-field');
  }
});

function validateForm() {
  const formInputs = {
    firstName: document.getElementById('firstName'),
    lastName: document.getElementById('lastName'),
    email: document.getElementById('email'),
    password: document.getElementById('password')
  };

  const errorMessages = ['firstNameError', 'lastNameError', 'emailError', 'passwordError'];
  const icons = ['firstNameIcon', 'lastNameIcon', 'emailIcon', 'passwordIcon'];

  errorMessages.forEach((error) => {
    document.getElementById(error).textContent = '';
  });

  icons.forEach((icon) => {
    document.getElementById(icon).style.display = 'none';
  });

  Object.values(formInputs).forEach((input) => {
    input.classList.remove('error-field');
  });

  let isValid = true;

  if (formInputs.firstName.value === '') {
    setError(formInputs.firstName, 'First name cannot be empty');
    isValid = false;
  }

  if (formInputs.lastName.value === '') {
    setError(formInputs.lastName, 'Last name cannot be empty');
    isValid = false;
  }

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (formInputs.email.value === '' || !formInputs.email.value.match(mailformat) || formInputs.password.value.length < 8) {
    setError(formInputs.email, 'Looks like this is not an email');
    isValid = false;
  } 


  if (formInputs.password.value.length < 8) {
    setError(formInputs.password, 'Password must be at least 8 characters');
    isValid = false;
  }
  if (formInputs.password.value === '' ) {
    setError(formInputs.password, 'Password cannot be emtpy');
    isValid = false;
  }

  return isValid;
}

function setError(input, errorMessage) {
  input.style.border = '1px solid red';
  document.getElementById(input.id + 'Error').textContent = errorMessage;
  document.getElementById(input.id + 'Icon').style.display = 'block';
  input.classList.add('error-field');
}

