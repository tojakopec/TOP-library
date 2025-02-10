const main = document.querySelector("#main");
const addBookModal = document.getElementById("modal");
const addBookButton = document.getElementById("addBookButton");

let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary() {}

addBookButton.addEventListener("click", () => {
  addBookModal.style.display = "flex";
});
