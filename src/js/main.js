// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

function fetchPictures(searchingItem) {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${searchingItem}&orientation=${ORIENTATION}&image_type=${IMAGE_TYPE}&safesearch=${SAFESEARCH}`
  ).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}

const form = document.querySelector('.form');
const elementsContainer = document.querySelector('.gallery');

form.addEventListener('submit', handleSubmit);

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41967229-af64f083e47c21f795887158a';
const ORIENTATION = 'horizontal';
const IMAGE_TYPE = 'photo';
const SAFESEARCH = 'true';

function handleSubmit(event) {
  event.preventDefault();

  const inputValue = event.currentTarget.elements.serching.value;

  fetchPictures(inputValue)
    .then(createMarkup)
    .catch(onFetchError)
    .finally(() => form.reset());
}

function createMarkup({ hits }) {
  if (hits.length === 0) {
    onFetchError();
  } else {
    const markup = hits.map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        ` <li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
  <img class="gallery-image"
  src="${webformatURL}"
  alt="${tags}" />

  

 
</li>`
    );
    //!!!! Oter data form {hits}  !!!!
    // </a>
    //   <container class="container details-container">
    //    <div class="details">
    //   <p class="details-title">likes</p>
    //   <p class="details-text">${likes}</p>
    // </div>
    // <div class="details">
    //   <p class="details-title">views</p>
    //   <p class="details-text">${views}</p>
    // </div>
    // <div class="details">
    //   <p class="details-title">comments</p>
    //   <p class="details-text">${comments}</p>
    // </div>
    // <div class="details">
    //   <p class="details-title">downloads</p>
    //   <p class="details-text">${downloads}</p>
    // </div></container>

    elementsContainer.innerHTML = markup.join('');
    form.reset();
  }

  const gallery = new SimpleLightbox('.gallery-item a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

function onFetchError(error) {
  iziToast.error({
    message:
      'Sorry, there are no images matching your search query. Please try again!',
  });
}
