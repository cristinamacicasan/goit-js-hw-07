import { galleryItems } from './gallery-items.js';
// Change code below this line




const galleryList = document.querySelector('.gallery');

function galleryElementCreation(item) {
  const galleryItem = document.createElement('li');
  const galleryLink = document.createElement('a');
  const galleryImage = document.createElement('img');
  galleryItem.classList.add('gallery__item');
  galleryLink.classList.add('gallery__link');
  galleryImage.classList.add('gallery__image');
  galleryLink.href = item.original;
  galleryImage.src = item.preview;
  galleryImage.alt = item.description;
  galleryImage.dataset.source = item.original; 
  galleryItem.appendChild(galleryLink);
  galleryLink.appendChild(galleryImage);
  return galleryItem;
}

galleryItems.forEach(item => {
  const galleryItem = galleryElementCreation(item);
  galleryList.appendChild(galleryItem);
});

galleryList.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  if (clickEvent.target.nodeName === 'IMG') {
    const imageUrl = clickEvent.target.dataset.source;
    const instance = basicLightbox.create(`
      <img src="${imageUrl}" width="800" height="600">
    `);

    document.addEventListener('keydown', (escEvent) => {
    if (escEvent.key === "Escape") {
        instance.close();
      };
    });

    instance.show();
  }

});