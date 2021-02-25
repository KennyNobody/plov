(function toTop(){
	let link = document.querySelector('.top-link');

	if (link) {
		link.addEventListener('click', function(e){
			e.preventDefault();
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		});

		document.addEventListener('scroll', function() {
			call(link);
		});
	}

	function call(link) {
		let height = window.innerHeight;
		let scrolled = window.pageYOffset;
		
		if (scrolled > height) {
			link.classList.remove('top-link--hidden');
		} else {
			link.classList.add('top-link--hidden');
		}
	}

})();