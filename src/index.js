import "./scss/style.scss";
import hamburger from './js/hamburger';
import scroll from './js/scroll';
import pageTop from './js/page-top';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';


hamburger();
scroll();
pageTop();

const wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  live: true
});
wow.init();
