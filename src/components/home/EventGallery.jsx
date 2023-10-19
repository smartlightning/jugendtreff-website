import React, { useState } from 'react';
import Gallery from 'react-images';

const EventGallery =({ images }) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index) => {
    setCurrentImage(index)
    setLightboxIsOpen(true)
  }

  return (
    <div>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.url} onClick={() => openLightbox(index)} alt={`Event ${index}`} />
        </div>
      ))}
      <Gallery
        images={images.map((image) => ({ src: image.url }))}
        isOpen={lightboxIsOpen}
        currentImage={currentImage}
        onClose={() => setLightboxIsOpen(false)}
      />
    </div>
  )
}

export default EventGallery;
