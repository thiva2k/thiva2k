import { storage, validateEmail } from './utils.js';

const form = document.getElementById('feedbackForm');
const status = document.getElementById('feedbackStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name.length < 2) return alert('Name must be at least 2 characters.');
  if (!validateEmail(email)) return alert('Please enter a valid email address.');
  if (message.length < 10) return alert('Message must be at least 10 characters.');

  const feedback = storage.get('feedback', []);
  feedback.push({ name, email, message, date: new Date().toISOString() });
  storage.set('feedback', feedback);
  status.textContent = 'Thanks for your feedback! It has been saved locally.';
  form.reset();
});

document.querySelectorAll('.faq-q').forEach((btn) => {
  btn.addEventListener('click', () => btn.parentElement.classList.toggle('open'));
});
