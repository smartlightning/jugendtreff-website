import React from 'react';
import Carousel from 'react-material-ui-carousel';
import PhotoTile from '../PhotoTile';

const PhotoCarousel = (props) => {
  // Initialize all elements with carousel class.
  // may make more sense to use this
  // https://github.com/oliviertassinari/react-swipeable-views
  // or this https://www.npmjs.com/package/react-material-ui-carousel
  /*  bulmaCarousel.attach('#carousel-demo', {
    slidesToScroll: 1,
    slidesToShow: 4,
  });
  return (
    <div>
      <section class='hero is-medium has-carousel'>
        <div id='carousel-demo' class='hero-carousel'>
          <div id='carousel-demo' class='carousel'>
            <div class='item-1'>-- Slide Content --</div>
            <div class='item-2'>-- Slide Content --</div>
            <div class='item-3'>-- Slide Content --</div>
          </div>
          <div class='hero-head'></div>
          <div class='hero-body'></div>
          <div class='hero-foot'></div>
        </div>
      </section>
    </div>
  ); */
  var items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <PhotoTile key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default PhotoCarousel;
