$(function () {
  $('.gallery-list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: 'linear',
    prevArrow: '.gallery__list-left',
    nextArrow: '.gallery__list-right',
  });
});

$(function () {
  $('.reviews-container').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: 'linear',
    prevArrow: '.reviews-container-left',
    nextArrow: '.reviews-container-right',
  });
});

