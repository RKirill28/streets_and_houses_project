
const runSlider = (selector) => {
	$(selector).slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	});
} 
