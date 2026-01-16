const express = require("express");
const app = express();
app.use(express.json());

let books = [
  { id: 1, title: "The Lord of the Rings", author: "J.R.R. Tolkien", price: 25, quantity: 10 },
  { id: 2, title: "Pride and Prejudice", author: "Jane Austen", price: 15.5, quantity: 5 },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", price: 10, quantity: 7 }
];

// READ all books
app.get("/books", (req, res) => res.json(books));

// READ single book
app.get("/books/:id", (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  book ? res.json(book) : res.status(404).send("Book not found");
});

// CREATE book
app.post("/books", (req, res) => {
  const book = { id: books.length + 1, ...req.body };
  books.push(book);
  res.status(201).json(book);
});

// UPDATE book (PUT)
app.put("/books/:id", (req, res) => {
  const i = books.findIndex(b => b.id == req.params.id);
  i >= 0 ? (books[i] = { id: books[i].id, ...req.body }, res.json(books[i]))
         : res.status(404).send("Book not found");
});

// DELETE book
app.delete("/books/:id", (req, res) => {
  const len = books.length;
  books = books.filter(b => b.id != req.params.id);
  len === books.length ? res.status(404).send("Book not found")
                       : res.send("Book deleted successfully");
});

app.listen(3000, () => console.log("Server running on port 3000"));
