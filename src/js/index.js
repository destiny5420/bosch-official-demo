// import style
import '../style/index.css';

// import image
import '../images/home_logo.png';
import '../images/home_img_01.png';
import '../images/home_img_02.png';
import '../images/home_img_03.png';
import '../images/home_img_04.png';

// import vue
// import Vue from 'vue/dist/vue';

// import jquery
import $ from 'jquery';

// import gsap
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// ***** variable *****
let isDebug = false;
let menuOpen = false;

function onEventBinding() {
  // menu btn
  $('#menu').on('click', function (e) {
    if (menuOpen) {
      menuOpen = false;
      $('#menu').removeClass('show');
      $('#menu-window').fadeOut(100);
    } else {
      menuOpen = true;
      $('#menu').addClass('show');
      $('#menu-window').fadeIn(100);
    }
  });

  // about more
  $('#more-about').on('click', function (e) {
    console.log('be clicked!!');
    window.location.href = '../about.html';
  });
}

function onGSAP() {
  console.log('*** onGSAP ***');

  // Regist Plugin
  gsap.registerPlugin(ScrollTrigger);

  let headerContent = gsap.timeline({
    scrollTrigger: {
      start: '5vh top',
      markers: false,
    },
  });

  headerContent.to('header p', {
    x: 0,
    opacity: 1,
    duration: 1,
  });
}

function onAwake() {
  console.log('*** onAwake ***');

  onEventBinding();
  onGSAP();
  $('#loading-bar').fadeOut();
}

$(function () {
  onAwake();
});
