import { books } from './data.js';
import { storage } from './utils.js';

const genreSelect = document.getElementById('genreSelect');
const lengthSelect = document.getElementById('lengthSelect');
const rec = document.getElementById('recommendation');
const readingList = document.getElementById('readingList');
let selected = null;

[...new Set(books.map((b) => b.genre))].forEach((g) => genreSelect.add(new Option(g, g)));

function pick() {
  const g = genreSelect.value;
  const l = lengthSelect.value;
  const candidates = books.filter((b) => (g === 'all' || b.genre === g) && (l === 'all' || b.length === l));
  selected = candidates[Math.floor(Math.random() * candidates.length)] || null;
  rec.classList.remove('animate');
  if (!selected) rec.textContent = 'No matching book found.';
  else rec.innerHTML = `<h2>${selected.title}</h2><p>${selected.author} · ${selected.genre} · ${selected.length}</p><p>${selected.synopsis}</p>`;
  void rec.offsetWidth;
  rec.classList.add('animate');
}

function renderList() {
  const list = storage.get('readingList', []);
  readingList.innerHTML = list.map((b) => `<li>${b.title} — ${b.author}</li>`).join('') || '<li>No saved recommendations yet.</li>';
}

document.getElementById('pickBtn').addEventListener('click', pick);
document.getElementById('pickAgainBtn').addEventListener('click', pick);
document.getElementById('saveRecBtn').addEventListener('click', () => {
  if (!selected) return;
  const list = storage.get('readingList', []);
  list.push({ title: selected.title, author: selected.author });
  storage.set('readingList', list);
  renderList();
});

renderList();
pick();
