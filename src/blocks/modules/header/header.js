(function initSearchToggle(){
	const btnOpen = document.querySelector('.header__open-search');
	const btnClose = document.querySelector('.head-search__btn--close');
	const block = document.querySelector('.head-search');

	if (btnOpen && block) {
		btnOpen.addEventListener('click', open);
	}

	if (btnClose && block) {
		btnClose.addEventListener('click', close);
	}
	
	// if (block) {
	// 	window.addEventListener('resize', close);
	// }
	
	function open() {
		if (window.innerWidth < 1200) {
			block.classList.add('head-search--open');
		} else {
			block.classList.remove('head-search--open');
		}
	}

	function close(e) {
		e.preventDefault();
		if (btnClose && block && window.innerWidth < 1200) {
			block.classList.remove('head-search--open');
		}
	}
	
})();