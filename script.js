const form = document.getElementById('subscribe-form');
const emailInput = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = emailInput.value.trim();
  if (validateEmail(email)) {
    message.textContent = 'Thank you for subscribing! 🎉';
    message.style.color = '#00ff99';
    emailInput.value = '';
    // TODO: Add AJAX to send email to your backend
  } else {
    message.textContent = 'Please enter a valid email address.';
    message.style.color = '#ff4c4c';
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
