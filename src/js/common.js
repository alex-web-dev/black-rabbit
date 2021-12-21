import { Swiper, Pagination, Autoplay } from 'swiper';
import Parallax from 'parallax-js';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import WOW from 'wow.js';

const wow = new WOW(
  {
    offset:      window.innerWidth > 768 ? 250 : 50,
    mobile:      true,
    live:        true,
    duration: 2000
  }
);

Swiper.use([Pagination, Autoplay ]);

window.addEventListener('load', () => {
  const $preload = document.querySelector('.preload');
  $preload.classList.add('preload_hide');
  wow.init();


  const $menu = document.querySelector('.menu');
  const $menuClose = document.querySelector('.menu__close');
  const $menuOpen = document.querySelector('.open-menu');

  $menuOpen.addEventListener('click', () => {
    $menu.classList.add('menu_active');
  });

  $menuClose.addEventListener('click', () => {
    $menu.classList.remove('menu_active');
  });

  const countriesSlider = new Swiper(".countries__list", {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 10,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    speed: 4000,
    grabCursor: true,
    mousewheelControl: true,
    keyboardControl: true,
  });

  const $footerColsHasItems = document.querySelectorAll('.footer__column_has-items');
  $footerColsHasItems.forEach($col => {
    const $title = $col.querySelector('.footer__title');
    $title.addEventListener('click', () => {
      if (window.innerWidth <= 992) {
        $col.classList.toggle('footer__column_active');
      }
    });
  });

  const bannerParallax = document.querySelector('.banner__parallax');
  if (bannerParallax) {
    new Parallax(bannerParallax);
  }

  const forParallax = document.querySelector('.for__parallax');
  if (forParallax) {
    new Parallax(forParallax);
  }

  const featuresParallax = document.querySelector('.features__parallax');
  if (featuresParallax) {
    new Parallax(featuresParallax);
  }

  const currencyParallax = document.querySelector('.currency__parallax');
  if (currencyParallax) {
    new Parallax(currencyParallax);
  }

  const callbackParallax = document.querySelector('.callback__parallax');
  if (callbackParallax) {
    new Parallax(callbackParallax);
  }

    window.addEventListener('scroll', parallaxScrollElems);
    parallaxScrollElems();
});

function parallaxScrollElems() {
  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    return;
  }

  const bannerInf = document.querySelector('.banner__inf');
  scrollParallax(bannerInf, 20);

  const forParallax = document.querySelector('.for__parallax');
  scrollParallax(forParallax);

  const featuresParallax = document.querySelector('.features__parallax');
  scrollParallax(featuresParallax);

  const currencyParallax = document.querySelector('.currency__parallax');
  scrollParallax(currencyParallax);

  const callbackParallax = document.querySelector('.callback__parallax');
  scrollParallax(callbackParallax);
}

function scrollParallax(elem) {
  const slowdown = 3;

  if (elem && elem.getBoundingClientRect().top < 0 + window.innerHeight &&
      -elem.getBoundingClientRect().top < window.innerHeight) {

    const scrollValue = elem.getBoundingClientRect().top / slowdown - window.innerWidth / 20;

    elem.style.transform = `translateY(${scrollValue}px)`;
  }
}