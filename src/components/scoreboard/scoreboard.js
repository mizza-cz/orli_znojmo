$("#scoreboard_carousel").slick({
  infinite: !0,
  arrows: true,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: !0,
  swipeToSlide: !0,
  //initialSlide: n,
  initialSlide: 4,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1650,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
      },
    },
  ],
});
