import { booksHolder, formTitle, formAuthor } from './variables.js';
import Books from './books.js';

export default class Library {
  constructor() {
    this.lenght = 0;
  }

  addBook() {
    const book = new Books(formTitle.value, formAuthor.value);
    if (localStorage.getItem('book') != null) {
      const booksArray = JSON.parse(localStorage.getItem('book'));
      booksArray.push(book);
      localStorage.setItem('book', JSON.stringify(booksArray));
    } else {
      const booksArray = [];
      booksArray.push(book);
      localStorage.setItem('book', JSON.stringify(booksArray));
    }
    this.lenght += 1;
  }

  remove(index) {
    const booksArray = JSON.parse(localStorage.getItem('book'));
    booksArray.splice(index, 1);
    localStorage.setItem('book', JSON.stringify(booksArray));
    this.lenght -= 1;
  }

  construc() {
    let count = 0;
    if (localStorage.getItem('book') !== '[]') {
      const storage = JSON.parse(localStorage.getItem('book'));
      storage.forEach((element) => {
        this.lenght = count;
        const newDiv = document.createElement('div');
        let itemTitle = element.title;
        let itemAuthor = element.author;
        if (element.title === '') {
          itemTitle = 'Title';
        }
        if (element.author === '') {
          itemAuthor = 'Author';
        }
        const newUl = document.createElement('ul');
        const liTitle = document.createElement('li');
        liTitle.innerHTML = `"${itemTitle}"`;
        newUl.appendChild(liTitle);
        const liby = document.createElement('li');
        liby.textContent = 'by';
        newUl.appendChild(liby);
        const liAuthor = document.createElement('li');
        liAuthor.textContent = itemAuthor;
        newUl.appendChild(liAuthor);
        newDiv.appendChild(newUl);
        const newButton = document.createElement('button');
        newButton.innerHTML = 'Remove';
        newButton.setAttribute('class', 'button-remove');
        newButton.setAttribute('id', count);
        newDiv.appendChild(newButton);
        newDiv.classList.add('books-div');
        if (this.lenght % 2 === 0) {
          newDiv.classList.add('bg-gray');
        } else {
          newDiv.classList.add('bg-white');
        }
        booksHolder.appendChild(newDiv);
        count += 1;
      });
      count = 0;
      const removeButtons = document.querySelectorAll('.button-remove');
      removeButtons.forEach((element) => {
        element.addEventListener('click', (e) => {
          this.remove(e.target.id, 1);
          booksHolder.innerHTML = '';
          this.construc();
        });
      });
    } else {
      const newDiv = document.createElement('div');
      const itemTitle = 'Example book';
      const itemAuthor = 'Example author.  This is an example text that will be deleted when you add a book ';
      const newUl = document.createElement('ul');
      const liTitle = document.createElement('li');
      liTitle.innerHTML = `"${itemTitle}"`;
      newUl.appendChild(liTitle);
      const liby = document.createElement('li');
      liby.textContent = 'by';
      newUl.appendChild(liby);
      const liAuthor = document.createElement('li');
      liAuthor.textContent = itemAuthor;
      newUl.appendChild(liAuthor);
      newDiv.appendChild(newUl);
      const newButton = document.createElement('button');
      newButton.innerHTML = 'Remove';
      newButton.setAttribute('class', 'button-remove');
      newButton.setAttribute('id', count);
      newDiv.appendChild(newButton);
      newDiv.classList.add('books-div');
      newDiv.classList.add('bg-gray');
      booksHolder.appendChild(newDiv);
    }
  }
}