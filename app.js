const main = document.querySelector("#main");
const addBookModal = document.getElementById("modal");
const openBookAddFormButton = document.getElementById("addBookButton");
const addBookButton = document.getElementById("addToLibrary");
const form = document.getElementById("addBookForm");

let books = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(event) {
  event.preventDefault();

  const fd = extractFormData(new FormData(form));
  const newBook = new Book(fd.title, fd.author, fd.pages, fd.isRead);
  books.push(newBook);
  closeAddBookForm();
  form.reset();
  console.log(books);
}

openBookAddFormButton.addEventListener("click", () => {
  addBookModal.style.display = "flex";
});

addBookButton.addEventListener("submit", function (event) {
  addBookToLibrary();
});

function extractFormData(formData) {
  const title = formData.get("title");
  const author = formData.get("author");
  const pages = formData.get("pages");
  const isRead = !!formData.get("isRead");

  return { title, author, pages, isRead };
}

function closeAddBookForm() {
  addBookModal.style.display = "none";
}
