// queries.js

use("plp_bookstore");

// ===== Task 2: Basic CRUD =====

// Find all books in a specific genre
db.books.find({ genre: "Programming" });

// Find books published after a certain year
db.books.find({ published_year: { $gt: 2010 } });

// Find books by a specific author
db.books.find({ author: "James Clear" });

// Update the price of a specific book
db.books.updateOne(
  { title: "The Alchemist" },
  { $set: { price: 18.99 } }
);

// Delete a book by its title
db.books.deleteOne({ title: "Think and Grow Rich" });


// ===== Task 3: Advanced Queries =====

// Find books that are in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// Projection (only title, author, price)
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// Sort by price ascending
db.books.find().sort({ price: 1 });

// Sort by price descending
db.books.find().sort({ price: -1 });

// Pagination (5 per page → page 2)
db.books.find().skip(5).limit(5);


// ===== Task 4: Aggregation Pipelines =====

// Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]);

// Author with the most books
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
]);

// Group books by publication decade
db.books.aggregate([
  {
    $group: {
      _id: { $subtract: [ { $divide: ["$published_year", 10] }, { $mod: [ { $divide: ["$published_year", 10] }, 1 ] } ] },
      count: { $sum: 1 }
    }
  }
]);


// ===== Task 5: Indexing =====

// Create index on title
db.books.createIndex({ title: 1 });

// Compound index on author + published_year
db.books.createIndex({ author: 1, published_year: -1 });

// Explain query performance
db.books.find({ title: "The Alchemist" }).explain("executionStats");
