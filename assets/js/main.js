require("../scss/main.scss");
require('@fortawesome/fontawesome-free/js/all.js');

(function() {	
	var burger = document.querySelector(".js-burger");
	if (!burger) {
		return;
	}

	var menu = document.querySelector(".js-menu");
	if (!menu) {
		return;
	}

	burger.addEventListener("click", function() {
		var ariaExpandedState = this.getAttribute("aria-expanded") === "true" ? false : true;
		this.setAttribute("aria-expanded", ariaExpandedState);
		this.classList.toggle("burger--is-active");
		menu.classList.toggle("header__nav--is-open");
	});
	
})();
		