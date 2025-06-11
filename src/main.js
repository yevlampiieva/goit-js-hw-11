// У файлі main.js напиши всю логіку роботи додатка.Виклики
//  нотифікацій iziToast, усі перевірки на довжину масиву в
//   отриманій відповіді робимо саме в цьому файлі.
//   Імпортуй в нього функції із файлів pixabay - api.js та
// render - functions.js та викликай їх у відповідний момент.

import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', handleSearchImages);

function handleSearchImages(event) {
  event.preventDefault();
  console.log(event.target.elements['search-text'].value);
}
