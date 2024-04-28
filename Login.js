
  function handleLogin() {
    // Simulate a successful login
    const success = true;

    // Hide the form
    const form = document.querySelector('.wrapper');
    form.style.display = 'none';

    // Show the success message
    const message = document.querySelector('#message');
    message.textContent = success ? 'Login successful!' : 'Login failed.';
    message.style.display = 'block';
  }