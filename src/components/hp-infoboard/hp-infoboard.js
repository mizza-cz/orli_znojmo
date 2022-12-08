$(".hp-infoboard__slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:
    '<button class="hp-infoboard__btn hp-infoboard__btnprev"><img src="./images/ico/left.svg" alt="" ></button> ',
  nextArrow:
    ' <button class="hp-infoboard__btn  hp-infoboard__btnnext"><img  src="./images/ico/right.svg" alt = "" ></button>',
  responsive: [
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
});
