document.addEventListener("DOMContentLoaded", function() {
	let logos = document.getElementsByClassName("js-logo");
	if (logos.length === 0 || logos.length > 2) return;

	let logo = logos.length === 1
		? logos[0]
		: (
				window.getComputedStyle(logos[0].closest(".header__responsive")).display === 'none'
				? logos[1]
				: logos[0]
			);

	let logoBox = logo.getBoundingClientRect();
	let centerPoint = window.getComputedStyle(logo).transformOrigin;
	let centers = centerPoint.split(" ");


	function rotateLogo(e) {
		let logoEvent = e;
		let mouseX = 0;
		let mouseY = 0;

		if (e.targetTouches && e.targetTouches[0]) {
					// e.preventDefault(); 
					logoEvent = e.targetTouches[0];
					mouseX = logoEvent.pageX;
					mouseY = logoEvent.pageY;
		} else {
					mouseX = e.clientX,
					mouseY = e.clientY;
		}

		let centerY = logoBox.top + parseInt(centers[1]) - window.pageYOffset;
		let centerX = logoBox.left + parseInt(centers[0]) - window.pageXOffset;
		let radians = Math.atan2(mouseX - centerX, mouseY - centerY);
		let degrees = (radians * (180 / Math.PI) * -1);
		logo.style.transform = 'rotate('+degrees+'deg)';
	}

	function resetRotateLogo(e) {
		logo.style.transform = 'rotate(0deg)';
	}

	window.addEventListener('mousemove', rotateLogo);
	window.addEventListener('mouseout', resetRotateLogo);
	window.addEventListener('touchmove', rotateLogo);
	window.addEventListener('touchstart', rotateLogo);
	window.addEventListener('touchend', resetRotateLogo);
});