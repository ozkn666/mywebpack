export default function () {
  $(function () {
    let pageTop = $('.p-page-top');
    pageTop.hide();

    $(window).scroll(function () {
      if ($(this).scrollTop() > 1000) {
        pageTop.fadeIn();
      } else {
        pageTop.fadeOut();
      }
    });
  })
}
