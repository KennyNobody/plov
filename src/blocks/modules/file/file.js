// modules.define('file', ['i-bem-dom'], function(provide, bemDom) {

// provide(bemDom.declBlock(this.name, {
//     onSetMod: {
//         js: {
//             inited: function() {

//             }
//         }
//     }
// }));

// });

(function toggleFileInputs(){
	const block = document.querySelectorAll('.file');
	for (let i = 0; i < block.length; i++ ) {
		addListener(block[i]);
	}
})();

function addListener(block) {
	let text = block.querySelector('.file__text');
	let input = block.querySelector('.file__field');

	input.addEventListener('change', function(){
		changeState(text, input);
	});
}

function changeState(text, input) {
	let message = input.files[0].name;
	text.textContent = message;
	// console.dir(input);
}