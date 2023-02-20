import Library from './modules/library.js';
import {
  form, booksHolder, liAdd, liList, liContact,
} from './modules/variables.js';
import { liAddShow, liContactShow, liListShow } from './modules/navBar.js';
import curretDate from './modules/time.js';

// DateTime.local().toLocaleString(DateTime.DATETIME_FULL)

setInterval(curretDate, 1000);
const library1 = new Library();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  library1.addBook();
  booksHolder.innerHTML = '';
  library1.construc();
  form.reset();
});

liAdd.addEventListener('click', () => {
  liAddShow();
});
liContact.addEventListener('click', () => {
  liContactShow();
});
liList.addEventListener('click', () => {
  liListShow();
});
window.addEventListener('load', () => {
  liListShow();
  library1.construc();
});
