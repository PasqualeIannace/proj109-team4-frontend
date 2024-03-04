<script>
import { ref } from "vue";
import { store } from "../store.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/general.scss";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

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
	<!-- <div v-for="user in store.userList">
		{{ user.activity_name }}  //I DATI ARRIVANO
	</div> -->
	<!-- <swiper
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
		<div class="swiper-slide" v-for="user in store.userList">
			<img :src="user.logo_activity" class="w-100" />
		</div>
		<div class="swiper-button-next"></div>
		<div class="swiper-button-prev"></div>
		<div class="swiper-pagination"></div>
	</swiper> -->

	<!-- <div class="swiper mySwiper mt-5 mb-2" ref="swiperRef">
		<div class="swiper-wrapper text-dark">
			<div class="swiper-slide" v-for="user in store.userList" :key="user.id">
				<img :src="user.logo_activity" class="w-100" />
			</div>
		</div>
		<div class="swiper-button-next"></div>
		<div class="swiper-button-prev"></div>
		<div class="swiper-pagination"></div>
	</div> -->
	<div class="swiperContainer">
		<swiper
			:slidesPerView="1"
			:centeredSlides="true"
			:loop="true"
			:spaceBetween="30"
			:autoplay="{
				delay: 2500,
				disableOnInteraction: false,
			}"
			:pagination="{
				type: 'fraction',
			}"
			:navigation="false"
			:modules="modules"
			class="mySwiper"
		>
			<div class="wrapper"></div>
			<!-- <swiper-slide v-for="user in userList"  :key="index">
	<img :src="user.logo_activity">
</swiper-slide> -->
			<swiper-slide>
				<img src="/public/logo_activity/cinese.png" class="w-50 object-fit-contain" />
			</swiper-slide>
			<swiper-slide>
				<img src="/public/logo_activity/pub.png" class="w-50 object-fit-contain" />
			</swiper-slide>
			<swiper-slide>
				<img src="/public/logo_activity/pizza.png" class="w-50 object-fit-contain" />
			</swiper-slide>
			<swiper-slide>
				<img src="/public/logo_activity/osteria.png" class="w-50 object-fit-contain" />
			</swiper-slide>
		</swiper>
	</div>
</template>

<style>
.swiperContainer{
	width: 1000px;
	height: 600px;
	margin: 0 auto;
}
.swiper-slide img {
	/* display: block; */
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
	margin-top: 10vh;
}
.mySwiper {
	max-height: 100%;
	margin-top: 10rem;
	margin-bottom: 2rem;
}
/* .swiper {
	width: 1000px;
	height: 450px;
}

.swiper-slide {
	text-align: center;
	font-size: 18px;
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
}

.swiper-slide img {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.swiper {
	margin-left: auto;
	margin-right: auto;
} */
/* .swiper {
	width: 80vw;
	height: auto;
}

.swiper-slide {
	text-align: center;
	font-size: 18px;
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
}

.swiper-slide img {
	display: block;
	width: 50%;
	height: 100%;
	object-fit: cover;
}

.swiper {
	margin-left: auto;
	margin-right: auto;
} */
</style>



