export default function () {
  const loading = $('.l-loading');
  window.onload = function () {
    loading.addClass('l-loading__loaded');
  }
}
