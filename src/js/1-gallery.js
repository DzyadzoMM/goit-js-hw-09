import SimpleLightbox from 'simplelightbox';
import 'simple-lightbox/dist/simpleLightbox.min.css';
import {images} from './images.js'

    const container = document.querySelector(".gallery");
    
    function createGallery(images) {
        return images.map(({preview, original, description})=> `
            <li class="gallery-item">
                <a class="gallery-link" href="${original}">
                    <img class="gallery-image"
                        src ="${preview}"
                        alt ="${description}"/>
                </a>
            </li>
            `).join("");
    }

    const galleryMarkup = createGallery(images);
    container.insertAdjacentHTML('beforeend', galleryMarkup);

    const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt',
        captionsDelay:250, captionsPosition:'bottom',});
