import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/16/solid'
import React, { useState } from 'react'

const EventGallery = ({ images }) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const openLightbox = (index) => {
    setCurrentImage(index)
    setLightboxIsOpen(true)
  }

  const closeLightbox = () => {
    setLightboxIsOpen(false)
  }

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length)
  }

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeLightbox()
    }
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.url}
              onClick={() => openLightbox(index)}
              alt={`Event ${index}`}
              className="rounded-lg cursor-pointer"
            />
          </div>
        ))}
      </div>

      {lightboxIsOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={handleOverlayClick}
        >
          <div className="relative bg-white rounded-lg py-8 px-10 w-3/4 h-3/4 flex items-center justify-center">
            <button
              className="absolute top-2 right-2 text-black"
              onClick={closeLightbox}
            >
              <XMarkIcon className="h-8 w-8 p-1 bg-slate-100 rounded-full" />
            </button>
            <button className="absolute left-2 text-black" onClick={prevImage}>
              <ChevronLeftIcon className="h-8 w-8 p-1 bg-slate-100 rounded-full" />
            </button>
            <button className="absolute right-2 text-black" onClick={nextImage}>
              <ChevronRightIcon className="h-8 w-8 p-1 bg-slate-100 rounded-full" />
            </button>
            <img
              src={images[currentImage].url}
              alt={`Event ${currentImage}`}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default EventGallery
