'use strict';

window.onload = function() {
  window.addEventListener('scroll', function() {
    scroll = window.pageYOffset || document.documentElement.scroll;
    scroll > 200 ? document.querySelector('.topButton').classList.add('fixed') : document.querySelector('.topButton').classList.remove('fixed');
  });
}

$(function() {
  $('.topButton').click(function() {
  $('body,html').animate({scrollTop:0},800);
  });   
});
