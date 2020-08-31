// modules.define('modal', ['i-bem-dom'], function(provide, bemDom) {

// provide(bemDom.declBlock(this.name, {
//     onSetMod: {
//         js: {
//             inited: function() {

//             }
//         }
//     }
// }));
// });
import $ from 'jquery';
import fancybox from '@fancyapps/fancybox';

// $( '[data-fancybox]' ).fancybox({

// });

// $("body").delegate("[data-fancybox='modal']", "click", function(event) {
// 	event.preventDefault();
// 	$.fancybox({
// 		'title': this.title,
// 		'href': this.href,
// 	});
// });

document.addEventListener('click',function(e){
	if(e.target && e.target.id == 'callNewsModal'){
		$.fancybox.open({
			src  : '#modal-news',
		});
	}
});