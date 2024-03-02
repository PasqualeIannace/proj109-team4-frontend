<script>
import { ref } from "vue";
import { store } from "../store.js";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/general.scss';
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

	<swiper

    :slidesPerView="4"
    :loop="true"
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      type: 'fraction',
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
  <div class="wrapper">
	
  </div>
    <!-- <swiper-slide v-for="user in userList"  :key="index">
        <img :src="user.logo_activity">
    </swiper-slide> -->
    <swiper-slide>
        <img src="../../public/img/02.png">
    </swiper-slide>
    <swiper-slide>
        <img src="../../public/img/03.png">
    </swiper-slide>
    <swiper-slide>
        <img src="../../public/img/04.png">
    </swiper-slide>
    <swiper-slide>
        <img src="../../public/img/05.png">
    </swiper-slide>
  </swiper>
</template>

<style>
.mySwiper{
    height: 40vh;
    background-image: url("../../public/img/Parallax-03.jpg");
    min-height: 30vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 3rem;
}
img{
  margin-top: 27%;
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
