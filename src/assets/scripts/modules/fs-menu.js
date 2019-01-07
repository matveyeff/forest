(function () {
	'use strict';

	let ham = document.querySelector('.hamburger'),
			menu = document.querySelector('.fs-nav');

	let openMenu = function () {
			ham.classList.toggle('is-active');
			menu.classList.toggle('is-active');
	}

	if (ham) {
			ham.addEventListener('click', openMenu);
	}
})();