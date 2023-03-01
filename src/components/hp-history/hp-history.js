$(".hp-history__inner").slick({
  infinite: true,
  slidesToScroll: 1,
  prevArrow:
    '<button class="hp-history__btn hp-history__btnprev"><?xml version="1.0" encoding="UTF-8"?><svg width="8px" height="14px" viewBox="0 0 8 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Path</title><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="HP-1.5" transform="translate(-920.000000, -4588.000000)" fill="#ff102c" fill-rule="nonzero"><g id="Group-3" transform="translate(100.000000, 4429.500000)"><g id="Group-56" transform="translate(529.000000, 136.000000)"><g id="Group-23-Copy" transform="translate(216.000000, 17.500000)"><polygon id="Path" transform="translate(79.111000, 12.000000) rotate(-180.000000) translate(-79.111000, -12.000000) " points="80.172 12 75.222 7.05 76.636 5.636 83 12 76.636 18.364 75.222 16.95"></polygon></g></g></g></g></g></svg></button> ',
  nextArrow:
    ' <button class="hp-history__btn  hp-history__btnnext"><svg width="8px" height="14px" viewBox="0 0 8 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Path</title><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="HP-1.5" transform="translate(-873.000000, -4588.000000)" fill="#ff102c" fill-rule="nonzero"><g id="Group-3" transform="translate(100.000000, 4429.500000)"><g id="Group-56" transform="translate(529.000000, 136.000000)"><g id="Group-23-Copy" transform="translate(216.000000, 17.500000)"><polygon id="Path" points="33.172 12 28.222 7.05 29.636 5.636 36 12 29.636 18.364 28.222 16.95"></polygon></g></g></g></g></g</svg></button>',
  slidesToShow: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1481,
      settings: {
        variableWidth: false,
        slidesToScroll: 1,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 641,
      settings: {
        variableWidth: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
        dots: true,
      },
    },
  ],
});
