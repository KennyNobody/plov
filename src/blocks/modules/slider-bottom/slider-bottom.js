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

let sliderBottom3 = new Swiper('.slider-bottom__container--3', {
	slidesPerView: 3,
	spaceBetween: 20,
	navigation: {
		nextEl: '.slider-bottom__link--next',
		prevEl: '.slider-bottom__link--prev',
		disabledClass: 'slider-bottom__link--disabled'
	},
	pagination: {
		clickable: true,
		el: '.slider-bottom__pagination',
		bulletClass: 'slider-bottom__bullet',
		bulletActiveClass: 'slider-bottom__bullet--active',
	},
});

let sliderBottom4 = new Swiper('.slider-bottom__container--4', {
	slidesPerView: 4,
	spaceBetween: 20,
	navigation: {
		nextEl: '.slider-bottom__link--next',
		prevEl: '.slider-bottom__link--prev',
		disabledClass: 'slider-bottom__link--disabled'
	},
	pagination: {
		clickable: true,
		el: '.slider-bottom__pagination',
		bulletClass: 'slider-bottom__bullet',
		bulletActiveClass: 'slider-bottom__bullet--active',
	},
	on: {
		init: function() {
			initTopButtons(this)
		}
	}
});



function initTopButtons(slider){
	let btnPrev = document.querySelector('.slider-btn--prev');
	let btnNext = document.querySelector('.slider-btn--next');

	if (btnPrev && slider) {
		btnPrev.addEventListener('click', function(){
			slider.slidePrev();
		})
	}

	if (btnNext && slider) {
		btnNext.addEventListener('click', function(){
			slider.slideNext();
		})
	}
};