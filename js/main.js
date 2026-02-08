import { authors, quotes } from './data.js';
import { revealOnScroll, storage, validateEmail } from './utils.js';

const heroQuote = document.getElementById('heroQuote');
const heroPhrase = document.getElementById('heroPhrase');
const authorOfDay = document.getElementById('authorOfDay');
const form = document.getElementById('newsletterForm');
const msg = document.getElementById('newsletterMessage');

if (heroQuote && heroPhrase) {
  let idx = 0;
  const rotate = () => {
    heroQuote.textContent = `“${quotes[idx].text}”`;
    heroPhrase.textContent = quotes[idx].phrase;
    idx = (idx + 1) % quotes.length;
  };
  rotate();
  setInterval(rotate, 3500);
}

if (authorOfDay) {
  const day = Math.floor(Date.now() / 86400000);
  authorOfDay.textContent = authors[day % authors.length];
}

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('navLinks');
hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', nav.classList.contains('open'));
});

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('newsletterEmail').value.trim();
  if (!validateEmail(email)) {
    msg.textContent = 'Please enter a valid email.';
    return;
  }
  storage.set('newsletterEmail', email);
  msg.textContent = `Thanks! ${email} subscribed.`;
  form.reset();
});

if ('serviceWorker' in navigator) navigator.serviceWorker.register('service-worker.js');
revealOnScroll();
