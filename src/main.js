import './scss/app.scss';
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import featherIcons from 'feather-icons';
import $ from 'jquery';

featherIcons.replace();

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

$('.menu-icon').on('click', function () {
    $(this).toggleClass('active');
    $(".nav-wrapper").toggleClass('active');
});
