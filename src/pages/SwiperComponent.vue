<script>
import { ref } from "vue";
import Swiper from 'swiper';
export default {
	name: "SwiperComponent",
	props: {
		store: {
			type: Array,
			required: true
		},
	},
	setup() {
		const swiperRef = ref(null);

		return {
			swiperRef,
		};
	},
    mounted() {
        //Inizializza Swiper qui dopo che il componente è stato montato
        new Swiper(".mySwiper", {
            //Configura le opzioni di Swiper qui
            slidesPerView: 'auto',
            spaceBetween: 30,
        });
    },
};
</script>

<template>
	  <div class="swiper mySwiper" ref="swiperRef">
        <div class="swiper-wrapper text-dark">
            <div class="swiper-slide" v-for="user in store.userList" :key="user.id">
                <p class="text-dark">{{ user.activity_name }}</p>
                <img src="user.logo_activity">
            </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
    </div>


</template>

<style>
.swiper {
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
}
</style>
