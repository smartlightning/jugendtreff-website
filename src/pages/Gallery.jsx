import React from "react";
import EventGallery from "../components/home/EventGallery";
import useFetch from "./hooks/useFetch";

const Gallery = () => {
  const { data, loading, error } = useFetch(
    "https://picsum.photos/v2/list?limit=10"
  );

  let images = [];
  if (data) {
    images = data.map((image) => ({ url: image.download_url }));
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Event Gallery</h1>
      <EventGallery images={images} />
    </div>
  );
};

export default Gallery;
