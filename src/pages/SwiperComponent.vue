<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
	Swiper,
	SwiperSlide,
  },
  setup() {
	return {
	  modules: [Autoplay, Pagination, Navigation],
	};
  },
};
</script>

<template>
	<swiper
	  :spaceBetween="30"
	  :centeredSlides="true"
	  :autoplay="{
		delay: 2500,
		disableOnInteraction: false,
	  }"
	  :pagination="{
		clickable: true,
	  }"
	  :navigation="true"
	  :modules="modules"
	  class="mySwiper"
	>
	<swiper-slide>
				<img src="/public/logo_activity/cinese.png" class=" object-fit-contain" />
			</swiper-slide>
			<swiper-slide>
				<img src="/public/logo_activity/pub.png" class=" object-fit-contain" />
			</swiper-slide>
			<swiper-slide>
				<img src="/public/logo_activity/pizza.png" class=" object-fit-contain" />
			</swiper-slide>
			<swiper-slide>
				<img src="/public/logo_activity/osteria.png" class=" object-fit-contain" />
			</swiper-slide>
	</swiper>
  </template>

<style scoped>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #000000e0;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
	margin-top: 15rem;
	margin-bottom: 1rem;
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #ffffff00;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  width: 22%;
}



</style>
  