export default function () {
  $(function () {
    const menu = $('.p-hamburger-menu');
    const main = $('.l-main');
    $('a[href^="#"]').click(function() {
      let speed = 1000;
      let href= $(this).attr("href");
      let className = $(this).attr("class");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      if (className === "p-page-top") {
        return false;
      }
      menu.toggleClass('p-hamburger-menu__open');
      main.toggleClass('p-hamburger-btn__open');
      return false;
    });
  })
}
