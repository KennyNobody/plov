import $ from 'jquery';
import fancybox from '@fancyapps/fancybox';

document.addEventListener('click',function(e){
	if(e.target && e.target.id == 'callNewsModal'){
		$.fancybox.open({
			src  : '#modal-news',
		});
	}
});

$('[data-fancybox]').fancybox({
	// beforeClose: function() {
	// 	let item = document.querySelector(this.src);
	// 	let inputs = item.querySelectorAll('[required]');
	// 	let valid = false;

	// 	for (let i = 0; i < inputs.length; i++) {
	// 		checkInput(inputs[i]);
	// 		if (inputs[i].value == '') {
	// 			inputs[i].classList.add('input__field--error');
	// 			valid = false;
	// 		} else {
	// 			valid = true;
	// 		}
	// 	}

	// 	function checkInput(el) {
	// 		el.addEventListener('change', function() {
	// 			if (el.value == '') {
	// 				el.classList.add('input__field--error');
	// 			} else {
	// 				el.classList.remove('input__field--error');	
	// 			}
	// 		})
	// 	}

	// 	if (valid == false) {
	// 		return false;
	// 	}

	// }
});