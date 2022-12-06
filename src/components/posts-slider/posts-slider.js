$(".posts-slider__inner").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:
    '<button class="posts-slider__btn posts-slider__btnprev"><img src="./images/ico/left.svg" alt="" ></button> ',
  nextArrow:
    ' <button class="posts-slider__btn  posts-slider__btnnext"><img  src="./images/ico/right.svg" alt = "" ></button>',
  responsive: [
    {
      breakpoint: 1340,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
      },
    },
  ],
});
