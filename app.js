const main = document.querySelector("#main");
const addBookModal = document.getElementById("modal");
const openBookAddFormButton = document.getElementById("addBookButton");
const form = document.getElementById("addBookForm");
const bookGrid = document.getElementById("bookGrid");

let books = [
  { id: 0, title: "1984", author: "George Orwell", pages: 138, isRead: true },
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    isRead: false,
  },
  {
    id: 2,
    title: "Moby-Dick",
    author: "Herman Melville",
    pages: 635,
    isRead: false,
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    pages: 279,
    isRead: true,
  },
  {
    id: 4,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    pages: 214,
    isRead: false,
  },
  {
    id: 5,
    title: "Brave New World",
    author: "Aldous Huxley",
    pages: 311,
    isRead: false,
  },
  {
    id: 6,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 310,
    isRead: true,
  },
  {
    id: 7,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    pages: 671,
    isRead: false,
  },
  {
    id: 8,
    title: "The Road",
    author: "Cormac McCarthy",
    pages: 287,
    isRead: true,
  },
  { id: 9, title: "Dune", author: "Frank Herbert", pages: 412, isRead: true },
  {
    id: 10,
    title: "The Alchemist",
    author: "Paulo Coelho",
    pages: 208,
    isRead: true,
  },
  {
    id: 11,
    title: "War and Peace",
    author: "Leo Tolstoy",
    pages: 1225,
    isRead: false,
  },
  {
    id: 12,
    title: "Frankenstein",
    author: "Mary Shelley",
    pages: 280,
    isRead: true,
  },
  {
    id: 13,
    title: "The Shining",
    author: "Stephen King",
    pages: 447,
    isRead: false,
  },
  {
    id: 14,
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    pages: 417,
    isRead: true,
  },
  {
    id: 15,
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    pages: 662,
    isRead: false,
  },
];

class Book {
  constructor(title, author, pages, isRead) {
    this.id = books.length;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

class BookCard extends HTMLElement {
  constructor(book) {
    super();
    this.id = book.id;
    this.title = book.title;
    this.author = book.author;
    this.pages = book.pages;
    this.isRead = book.isRead;
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="bookCard" id="book-${this.id}">
        <h3>${this.title}</h3>
        <p><strong>Author:</strong> ${this.author}</p>
        <p><strong>Pages:</strong> ${this.pages}</p>
        <p><strong>Read:</strong> ${this.isRead ? "Yes" : "No"}</p>
      </div>
    `;
  }
}

customElements.define("book-card", BookCard);

openBookAddFormButton.addEventListener("click", () => {
  addBookModal.style.display = "flex";
  toggleLibraryView();
});

function addBookToLibrary(event) {
  event.preventDefault();

  const fd = extractFormData(new FormData(form));
  const newBook = new Book(fd.title, fd.author, fd.pages, fd.isRead);
  books.push(newBook);
  closeAddBookForm();
  form.reset();
  updateLibraryView();
  console.log(books);
}

function extractFormData(formData) {
  const title = formData.get("title");
  const author = formData.get("author");
  const pages = formData.get("pages");
  const isRead = !!formData.get("isRead");

  return { title, author, pages, isRead };
}

function closeAddBookForm() {
  addBookModal.style.display = "none";
  toggleLibraryView();
}

function toggleLibraryView() {
  bookGrid.style.display = bookGrid.style.display == "none" ? "flex" : "none";
}

function updateLibraryView() {
  bookGrid.append(new BookCard(books[books.length - 1]));
}

function loadBooks() {
  books.forEach((book) => bookGrid.append(new BookCard(book)));
}

loadBooks();
