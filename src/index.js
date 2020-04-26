import "./scss/style.scss";
import hamburger from './js/hamburger';
import scroll from './js/scroll';


hamburger();
scroll();

const wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  live: true
});
wow.init();
