// AOS initialization
AOS.init();

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 60,
  nav: true,
  stagePadding: 280,
  dots: false,
  responsive: {
    0: {
      items: 1,
      stagePadding: 0,
      margin: 0,
      loop: true,
    },
    600: {
      items: 1,
      stagePadding: 0,
    },
    1000: {
      items: 1,
      margin: 0,
    },
  },
});
