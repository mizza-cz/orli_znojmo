$(".hp-fanshop__slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:
    '<button class="hp-fanshop__btn hp-fanshop__btnprev"><img src="./images/ico/left.svg" alt="" ></button> ',
  nextArrow:
    ' <button class="hp-fanshop__btn  hp-fanshop__btnnext"><img  src="./images/ico/right.svg" alt = "" ></button>',
  responsive: [
    {
      breakpoint: 1340,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1101,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
});
