export const books = [
  {
    id: 1,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "fantasy",
    length: "medium",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=60",
    synopsis: "Bilbo Baggins is swept into an adventure of dwarves, dragons, and buried treasure.",
    series: ["Prequel: None", "Sequel: The Lord of the Rings"],
    reviews: [{ user: "Maya", rating: 5, review: "Timeless and magical." }, { user: "Arun", rating: 4, review: "Great pacing and worldbuilding." }]
  },
  {
    id: 2,
    title: "Dune",
    author: "Frank Herbert",
    genre: "sci-fi",
    length: "long",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=600&q=60",
    synopsis: "Paul Atreides navigates prophecy, power, and survival on Arrakis.",
    series: ["Sequel: Dune Messiah"],
    reviews: [{ user: "Lin", rating: 5, review: "Dense, political, brilliant." }]
  },
  {
    id: 3,
    title: "Animal Farm",
    author: "George Orwell",
    genre: "fiction",
    length: "short",
    image: "https://images.unsplash.com/photo-1473755504818-b72b6dfdc226?auto=format&fit=crop&w=600&q=60",
    synopsis: "A satirical fable of power and corruption on a farm.",
    series: ["Standalone"],
    reviews: [{ user: "Ravi", rating: 4, review: "Short, sharp, unforgettable." }]
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "romance",
    length: "medium",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=60",
    synopsis: "Elizabeth Bennet and Mr. Darcy overcome pride, prejudice, and social pressures.",
    series: ["Standalone"],
    reviews: [{ user: "Noah", rating: 5, review: "Witty and elegant." }]
  }
];

export const quotes = [
  { text: "Not all those who wander are lost.", phrase: "Adventure begins with a page." },
  { text: "A reader lives a thousand lives.", phrase: "Books stretch your imagination." },
  { text: "There is no friend as loyal as a book.", phrase: "Find your next loyal friend." }
];

export const authors = ["Ursula K. Le Guin", "Toni Morrison", "Kazuo Ishiguro", "Isabel Allende", "Neil Gaiman", "Haruki Murakami"];
