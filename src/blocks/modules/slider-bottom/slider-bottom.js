// modules.define('slider-bottom', ['i-bem-dom'], function(provide, bemDom) {

// provide(bemDom.declBlock(this.name, {
//     onSetMod: {
//         js: {
//             inited: function() {

//             }
//         }
//     }
// }));

// });

import Swiper from 'swiper';

var mySwiper = new Swiper('.slider-bottom__container--3', {
	slidesPerView: 3,
	spaceBetween: 20,
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// },
	pagination: {
		el: '.slider-bottom__pagination',
		type: 'bullets',
	},
})