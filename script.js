console.log('Hello!');
function handleFormSubmission(event) {
  event.preventDefault(); // Prevent the default form submission

  // Access form fields
  var firstname = document.getElementById('first-name').value;
  var lastname = document.getElementById('last-name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  const nameError = document.getElementById('error-name');
  const lastError = document.getElementById('error-last');
  const passError = document.getElementById('error-pass');
  const emailError = document.getElementById('error-email');

  // Perform form validation
  if (firstname === '' || email === '' || lastname === '' || password === '') {
    nameError.textContent = 'First name cannot be empty.';
    lastError.textContent = 'Last name cannot be empty.'; 
    passError.textContent = 'Password cannot be empty';
    emailError.textContent = 'Look like this is not an email.';

   // alert('Please fill in all fields');
    return;
  }

  // Process the form data (you can replace this with your own logic)
  // For example, you can send the data to a server using AJAX or fetch

  alert('Form submitted successfully!');

  // Reset the form after submission
  document.getElementById('myForm').reset();
}
