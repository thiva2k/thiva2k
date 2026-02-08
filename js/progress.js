import { storage } from './utils.js';

const form = document.getElementById('progressForm');
const stats = document.getElementById('progressStats');
const bar = document.getElementById('progressBar');
const saveBtn = document.getElementById('saveProgress');
let lastResult = null;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const total = Number(document.getElementById('totalPages').value);
  const read = Number(document.getElementById('pagesRead').value);
  const speed = Number(document.getElementById('dailySpeed').value);
  if (!total || read < 0 || speed <= 0 || read > total) {
    stats.textContent = 'Invalid values. Ensure read pages are less than total pages.';
    return;
  }
  const percent = Math.round((read / total) * 100);
  const days = Math.ceil((total - read) / speed);
  stats.textContent = `${percent}% complete. Estimated finish: ${days} day(s).`;
  bar.style.width = `${percent}%`;
  lastResult = { total, read, speed, percent, days };
});

saveBtn.addEventListener('click', () => {
  if (!lastResult) return;
  storage.set('readingProgress', lastResult);
  stats.textContent += ' Saved!';
});

const saved = storage.get('readingProgress', null);
if (saved) {
  stats.textContent = `Saved progress: ${saved.percent}% complete, ${saved.days} day(s) remaining.`;
  bar.style.width = `${saved.percent}%`;
}
