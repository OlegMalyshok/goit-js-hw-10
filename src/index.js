import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const catBreed = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const errMessage = document.querySelector('.error');
const loadMessage = document.querySelector('.loader');

catBreed.onchange = infoCat;
catInfo.style.display = 'none';
errMessage.style.display = 'none';
loadMessage.style.display = 'none';

function makeChoice() {
  fetchBreeds()
    .then(data => {
      loadMessage.style.display = 'none';
      catBreed.innerHTML = data
        .map(({ name, id }) => `<option value="${id}">${name}</option>`)
        .join('');
    })
    .catch(() => {
      errMessage.style.display = 'block';
    });
}

makeChoice();

function infoCat() {
  catInfo.style.display = 'none';
  loadMessage.style.display = 'block';
  fetchCatByBreed(catBreed.value)
    .then(data => {
      loadMessage.style.display = 'none';
      catInfo.style.display = 'block';
      showCatInfo(data[0]);
    })
    .catch(() => {
      errMessage.style.display = 'block';
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    });
}

function showCatInfo(breed) {
  const markup = `
        <img src="${breed.url}" alt="${breed.breeds[0].name} height="600" width="500" ">
        <h1>${breed.breeds[0].name}</h1>
        <p>${breed.breeds[0].description}</p>
        <h2>Temperament: ${breed.breeds[0].temperament}</h2>`;
  catInfo.innerHTML = markup;
}
