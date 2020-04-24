
import { Swiper, Pagination } from 'swiper/js/swiper.esm'

window.addEventListener('load', () => {

	Swiper.use([Pagination]);

	new Swiper('.sliderSection .container .sliderSection__wrapperSwiper .sliderSection__swiper-container', {
		loop: true,
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination-gravestone',
			type: 'bullets',
		}
	})
})