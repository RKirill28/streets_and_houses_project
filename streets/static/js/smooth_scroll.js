const requestAnimationFrame =
	window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	window.oRequestAnimationFrame;

const wrapper = document.querySelector(".scroll"),
	    target = document.getElementsByTagName("body")[0];
	

let easing = "cubic-bezier(0.23, 1, 0.32, 1)",
	  duration = "1s",
		lastScrollY = window.scrollY,
	  pos = 0;

const init = () => {
	target.style.height = wrapper.offsetHeight + "px";
	target.style.overflow = "auto";

	wrapper.style.transition = "transform " + duration + " " + easing;
	wrapper.style.position = "fixed";
	wrapper.style.top = "0";
	wrapper.style.left = "0";
	wrapper.style.width = "100%";
	wrapper.style.padding = "0";
	wrapper.style.zIndex = "2";
	wrapper.style.display = "block";
	wrapper.style.backfaceVisibility = "hidden";

	loop();
};

const onScroll = scrollY => {
	pos = -(scrollY || document.documentElement.scrollTop);
	wrapper.style.transform = "translateY(" + pos + "px)";
};

const loop = () => {
	let scrollY = window.scrollY;
	
	if (lastScrollY === scrollY) {
		requestAnimationFrame(loop);
		return;
	} else {
		lastScrollY = scrollY;
		onScroll(scrollY);
		requestAnimationFrame(loop);
	}
};

if (wrapper) {
	const width = window.innerWidth;

	if (width > 1200) {
		init();
	}
}