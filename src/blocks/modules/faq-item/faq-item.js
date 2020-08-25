// modules.define('faq-item', ['i-bem-dom'], function(provide, bemDom) {

// provide(bemDom.declBlock(this.name, {
//     onSetMod: {
//         js: {
//             inited: function() {

//             }
//         }
//     }
// }));

// });

(function () {

	function toggleFaqItem() {
		const items = document.querySelectorAll('.faq-item__header');

		if (items) {
			for (let i = 0; i < items.length; i++) {
				items[i].addEventListener('click', toggle);
			}
		}

		function toggle() {
			this.parentNode.classList.toggle('faq-item--open');
		}

	}

	toggleFaqItem();

})();