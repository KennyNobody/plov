document.addEventListener('DOMContentLoaded', () => {
	initTgBlock();
});

function initTgBlock() {
	let flag = localStorage.getItem('tg-flag');
	let block = document.querySelector('.tg-block');

	if (flag) {
		console.log('Отмечено, не показываем');

	} else {
		console.log('Не отмечено, показываем');
		block.classList.add('tg-block--visible');
	}

	let button = document.querySelector('.tg-block__button');

	button.addEventListener('click', function(){
		localStorage.setItem('tg-flag', true);
		block.classList.remove('tg-block--visible');
	});
}