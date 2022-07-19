import React from 'react';
import bulmaCarousel from '~bulma-carousel/dist/js/bulma-carousel.min.js';

const Carousel = () => {
  // Initialize all elements with carousel class.
  bulmaCarousel.attach('#carousel-demo', {
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
  );
};

export default Carousel;
