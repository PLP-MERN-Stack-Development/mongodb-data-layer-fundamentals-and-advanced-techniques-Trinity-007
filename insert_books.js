// insert_books.js

use("plp_bookstore"); // Switch to (or create) database

db.books.insertMany([
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    published_year: 1988,
    price: 15.99,
    in_stock: true,
    pages: 208,
    publisher: "HarperCollins"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    published_year: 2018,
    price: 20.5,
    in_stock: true,
    pages: 320,
    publisher: "Penguin Random House"
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    genre: "Finance",
    published_year: 1997,
    price: 12.75,
    in_stock: false,
    pages: 336,
    publisher: "Plata Publishing"
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Productivity",
    published_year: 2016,
    price: 17.0,
    in_stock: true,
    pages: 304,
    publisher: "Grand Central Publishing"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    genre: "Programming",
    published_year: 1999,
    price: 25.0,
    in_stock: true,
    pages: 352,
    publisher: "Addison-Wesley"
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    published_year: 2008,
    price: 30.0,
    in_stock: true,
    pages: 464,
    publisher: "Prentice Hall"
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Biography",
    published_year: 2018,
    price: 18.0,
    in_stock: true,
    pages: 448,
    publisher: "Crown Publishing"
  },
  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    genre: "Motivation",
    published_year: 1937,
    price: 10.5,
    in_stock: false,
    pages: 320,
    publisher: "Ballantine Books"
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    published_year: 2011,
    price: 22.0,
    in_stock: true,
    pages: 498,
    publisher: "Harper"
  },
  {
    title: "Can’t Hurt Me",
    author: "David Goggins",
    genre: "Self-Help",
    published_year: 2018,
    price: 19.99,
    in_stock: true,
    pages: 364,
    publisher: "Lioncrest Publishing"
  }
]);
// End of insert_books.js