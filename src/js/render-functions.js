import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const render = (pictures, placeForContent) => {
  placeForContent.insertAdjacentHTML('beforeend', makeMarkUp(pictures));
  simpleGallery.refresh();
};

const simpleGallery = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

simpleGallery.on('error.simplelightbox', function (e) {
  console.log(e);
});

function makeMarkUp(pictures) {
  return pictures.reduce(
    (
      acc,
      { webformatURL, largeImageURL, tags, likes, views, comments, downloads }
    ) =>
      (acc += `<li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img
          class="gallery-image"
          src="${webformatURL}" 
          alt="${tags}"
        />
        <div class="picture-describe">
        <span><span class="title">Likes</span>${likes}</span>
        <span><span class="title">Views</span>${views}</span>
        <span><span class="title">Comments</span>${comments}</span>
        <span><span class="title">Downloads</span>${downloads}</span>
        </div>
      </a>
    </li>`),
    ``
  );
}

export default render;
