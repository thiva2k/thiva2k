import { books } from './data.js';

const grid = document.getElementById('bookGrid');
const search = document.getElementById('searchInput');
const genre = document.getElementById('genreFilter');
const modal = document.getElementById('bookModal');

[...new Set(books.map((b) => b.genre))].forEach((g) => {
  const opt = document.createElement('option'); opt.value = g; opt.textContent = g; genre.append(opt);
});

function render(list) {
  grid.innerHTML = list.map((b) => `<article class="book-card" data-id="${b.id}"><img class="book-cover" src="${b.image}" alt="${b.title}"/><h3>${b.title}</h3><p>${b.author}</p><small>${b.genre}</small></article>`).join('');
}

function filterBooks() {
  const q = search.value.toLowerCase();
  const g = genre.value;
  const list = books.filter((b) => (g === 'all' || b.genre === g) && (`${b.title} ${b.author}`.toLowerCase().includes(q)));
  render(list);
}

function openModal(book) {
  document.getElementById('modalTitle').textContent = `${book.title} — ${book.author}`;
  document.getElementById('modalSynopsis').textContent = book.synopsis;
  document.getElementById('modalSeries').innerHTML = book.series.map((s) => `<li>${s}</li>`).join('');
  document.getElementById('modalReviews').innerHTML = book.reviews.map((r) => `<tr><td>${r.user}</td><td>${r.rating}/5</td><td>${r.review}</td></tr>`).join('');
  modal.showModal();
}

grid.addEventListener('click', (e) => {
  const card = e.target.closest('.book-card');
  if (!card) return;
  openModal(books.find((b) => b.id === Number(card.dataset.id)));
});

document.getElementById('closeModal').addEventListener('click', () => modal.close());
search.addEventListener('input', filterBooks);
genre.addEventListener('change', filterBooks);
render(books);
