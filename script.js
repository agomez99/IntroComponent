console.log('Hello!');
function handleFormSubmission(event) {
  event.preventDefault(); // Prevent the default form submission

  // Access form fields
  var firstname = document.getElementById('first-name').value;
  var lastname = document.getElementById('last-name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;





  // Perform form validation
  if (firstname === '' || email === '' || lastname === '' || password === '') {

    alert('Please fill in all fields');
    return;
  }

  // Process the form data (you can replace this with your own logic)
  // For example, you can send the data to a server using AJAX or fetch

  alert('Form submitted successfully!');

  // Reset the form after submission
  document.getElementById('myForm').reset();
}