import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import pixabayApi from './js/pixabay-api';
import render from './js/render-functions';

const gallery = document.querySelector('.gallery');
const loader = document.createElement('div');
loader.className = 'loader';
gallery.appendChild(loader);
const loadMoreBtn = document.querySelector('.load-more');
const loadingMessage = document.getElementById('loading-message');
let currentPage = 1;
let currentSearch = '';
let totalHits = 0;

const errMessage = {
  position: 'topRight',
  theme: 'dark',
  color: '#ef4040',
  message:
    'Sorry, there are no images matching your search query. Please try again!',
};

document.querySelector('form').addEventListener('submit', async event => {
  event.preventDefault();
  gallery.innerHTML = '';
  currentPage = 1;
  currentSearch = event.target.searchrequest.value;

  await fetchImages(currentSearch);
  event.target.reset();
});

loadMoreBtn.addEventListener('click', () => {
  fetchImages(currentSearch);
});

const fetchImages = async searchQuery => {
  loader.style.display = 'flex';
  loadMoreBtn.style.display = 'none';
  loadingMessage.style.display = 'block';

  try {
    const data = await pixabayApi(searchQuery, currentPage);
    loader.style.display = 'none';
    loadingMessage.style.display = 'none';

    if (data.hits.length === 0 && currentPage === 1) {
      iziToast.error(errMessage);
      loadMoreBtn.style.display = 'none';
      return;
    }

    if (data.hits.length > 0) {
      render(data.hits, gallery);
      currentPage += 1;
      totalHits = data.totalHits;

      if (currentPage > Math.ceil(totalHits / 15)) {
        loadMoreBtn.style.display = 'none';
        iziToast.info({
          position: 'topRight',
          theme: 'dark',
          color: '#007bff',
          message: "We're sorry, but you've reached the end of search results.",
        });
      } else if (data.hits.length < 15 && currentPage === 2) {
        loadMoreBtn.style.display = 'none';
        iziToast.info({
          position: 'topRight',
          theme: 'dark',
          color: '#007bff',
          message: "We're sorry, but you've reached the end of search results.",
        });
      } else {
        loadMoreBtn.style.display = 'block';
      }
    }
  } catch (error) {
    loader.style.display = 'none';
    loadingMessage.style.display = 'none';
    gallery.innerHTML =
      'Something went wrong. <br/>Please, check your connection and try again.';
    console.error(error);
  }
};

const colorSwitcher = document.querySelector('.slide');
if (colorSwitcher) {
  colorSwitcher.addEventListener('click', e => {
    document.body.classList.toggle('black');
    document.body.firstElementChild.classList.toggle('black');
    document.getElementById('searchrequest').classList.toggle('black');
    e.target.firstElementChild.checked = !e.target.firstElementChild.checked;
  });

  setTimeout(() => {
    colorSwitcher.style.opacity = '0.1';
  }, 5000);
}
