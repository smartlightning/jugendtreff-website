import React from "react";
import Carousel from "react-material-ui-carousel";
import useFetch from "../../pages/hooks/useFetch";
import PhotoTile from "../PhotoTile";
import { IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const PhotoCarousel = () => {
  const { data, loading, error } = useFetch(
    "https://picsum.photos/v2/list?limit=10"
  );

  let items = [];
  if (data) {
    items = data.map((image, index) => ({
      url: image.download_url,
      name: `Random Name #${index + 1}`,
      description: "Probably the most random thing you have ever seen!",
    }));
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Carousel
      NextIcon={
        <IconButton style={{ zIndex: 2, color: "white" }}>
          <ArrowForwardIos />
        </IconButton>
      }
      PrevIcon={
        <IconButton style={{ zIndex: 2, color: "white" }}>
          <ArrowBackIos />
        </IconButton>
      }
      navButtonsAlwaysVisible={true}
    >
      {items.map((item, i) => (
        <PhotoTile key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default PhotoCarousel;
