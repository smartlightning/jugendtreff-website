import React from "react";
import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";

const UploadImages = ({ onUpload }) => {
  const onDrop = (picture) => {
    // Handle image upload and call onUpload callback
    onUpload(picture);
  };
  return (
    <ImageUploader
      withIcon={true}
      withLabel={false}
      buttonText="Choose images"
      onChange={onDrop}
      imgExtension={[".jpg", ".jpeg", ".png"]}
      maxFileSize={5242880}
    />
  );
};
export default UploadImages;
