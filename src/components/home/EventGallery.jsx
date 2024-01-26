import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, Close } from "@mui/icons-material";

const EventGallery = ({ images }) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div>
      <ImageList cols={3} gap={15}>
        {images.map((image, index) => (
          <ImageListItem key={index}>
            <img
              src={image.url}
              onClick={() => openLightbox(index)}
              alt={`Event ${index}`}
              style={{ borderRadius: "10px", cursor: "pointer" }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* popup modal */}
      <Modal
        open={lightboxIsOpen}
        onClose={closeLightbox}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "10px",
            width: "50%",
            height: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            style={{
              zIndex: 2,
              color: "black",
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
            onClick={closeLightbox}
          >
            <Close />
          </IconButton>
          <IconButton
            style={{
              zIndex: 2,
              color: "black",
              position: "absolute",
              right: "10px",
            }}
            onClick={nextImage}
          >
            <ArrowForwardIos />
          </IconButton>
          <IconButton
            style={{
              zIndex: 2,
              color: "black",
              position: "absolute",
              left: "10px",
            }}
            onClick={prevImage}
          >
            <ArrowBackIos />
          </IconButton>
          <img
            src={images[currentImage].url}
            alt={`Event ${currentImage}`}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              borderRadius: "10px",
            }}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default EventGallery;
