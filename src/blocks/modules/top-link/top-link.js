// modules.define('top-link', ['i-bem-dom'], function(provide, bemDom) {

// provide(bemDom.declBlock(this.name, {
//     onSetMod: {
//         js: {
//             inited: function() {

//             }
//         }
//     }
// }));

// });

(function toTop(){
	let link = document.querySelector('.top-link');

	if (link) {
		link.addEventListener('click', function(e){
			e.preventDefault();
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		})
	}
})();