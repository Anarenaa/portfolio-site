const slider = document.querySelector('.swiper');

let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 600 && slider.dataset.mobile === 'false') {
		mySwiper = new Swiper(slider, {
			slidesPerView: 1,
			spaceBetween: 10,
			loop: true,
		});

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 600) {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-container-initialized')) {
			mySwiper.destroy();
		}
	}
}

mobileSlider();

window.addEventListener('resize', () => {
	mobileSlider();
});