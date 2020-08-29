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
	slidesPerView: 'auto',
	spaceBetween: 20,
	freeMode: true,
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
	breakpoints: {
		1200: {
			freeMode: false,
			slidesPerView: 3,
			spaceBetween: 20
		},
	}
});

let sliderBottom4 = new Swiper('.slider-bottom__container--4', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	freeMode: true,
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
	breakpoints: {
		1200: {
			freeMode: false,
			slidesPerView: 4,
			freeMode: false,
			spaceBetween: 20
		},
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