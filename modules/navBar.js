import {
  liAdd, liContact, liList, sectionAdd, sectionContact, sectionList,
} from './variables.js';

export function liListShow() {
  liList.style.color = 'rgb(26, 111, 126)';
  liAdd.style.color = 'black';
  liContact.style.color = 'black';
  sectionList.classList.remove('hide');
  sectionAdd.classList.add('hide');
  sectionContact.classList.add('hide');
}

export function liAddShow() {
  liAdd.style.color = 'rgb(26, 111, 126)';
  liList.style.color = 'black';
  liContact.style.color = 'black';
  sectionList.classList.add('hide');
  sectionAdd.classList.remove('hide');
  sectionContact.classList.add('hide');
}

export function liContactShow() {
  liContact.style.color = 'rgb(26, 111, 126)';
  liList.style.color = 'black';
  liAdd.style.color = 'black';
  sectionList.classList.add('hide');
  sectionAdd.classList.add('hide');
  sectionContact.classList.remove('hide');
}