import React, { useEffect, useState } from 'react'
import EventGallery from '../components/home/EventGallery';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from your API and set them in state
   // api.getImages().then((data) => setImages(data));
  }, []);

  return (
    <div>
      <h1>Event Gallery</h1>
      <EventGallery images={images} />
    </div>
  );
}

export default Gallery