// modules.define('slider-main', ['i-bem-dom'], function(provide, bemDom) {

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

let sliderMain = new Swiper('.slider-main__container', {
	slidesPerView: 1,
	navigation: {
		nextEl: '.slider-main__link--next',
		prevEl: '.slider-main__link--prev',
		disabledClass: 'slider-main__link--disabled'
	},
	pagination: {
		clickable: true,
		el: '.slider-main__pagination',
		bulletClass: 'slider-main__bullet',
		bulletActiveClass: 'slider-main__bullet--active',
	},
});