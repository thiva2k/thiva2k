import { storage } from './utils.js';

const audio = document.getElementById('cozyAudio');
const toggle = document.getElementById('soundToggle');
const form = document.getElementById('completeForm');
const listEl = document.getElementById('completedList');

function render() {
  const items = storage.get('completedBooks', []);
  listEl.innerHTML = items.map((i) => `<li>${i}</li>`).join('') || '<li>No completed books yet.</li>';
}

toggle.addEventListener('click', async () => {
  if (audio.paused) { await audio.play(); toggle.textContent = 'Stop Cozy Sound'; }
  else { audio.pause(); toggle.textContent = 'Play Cozy Sound'; }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('completedTitle').value.trim();
  if (!title) return;
  const items = storage.get('completedBooks', []);
  items.push(title);
  storage.set('completedBooks', items);
  form.reset();
  render();
});

render();
