// modules.define('mmenu', ['i-bem-dom'], function(provide, bemDom) {

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
import Mmenu from 'mmenu-js';

(function initMmenu(){
	
	new Mmenu( "#mmenu", {
		"slidingSubmenus": false,
		"extensions": [
		"position-front",
		"pagedim-black"
		],
		"navbar": {
			"title": 'Меню'
		},
		"navbars": [
		{
			"position": "bottom",
			"content": mmenuBottomContent || undefined
		},
		]
	});

})();