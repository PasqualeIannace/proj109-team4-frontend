<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { store } from "../store.js";

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
      store, // Aggiungi lo store direttamente al setup
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  mounted() {
    console.log("swiper component");
  },
};
</script>

<template>
  <swiper
    :spaceBetween="0"
    :slides-per-view="1"
    :centeredSlides="true"
    :loop = "true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :modules="modules"
    class="mySwiper"
  >

      <swiper-slide>
        <img src="1.png" class="myImg"/>
      </swiper-slide>
      <swiper-slide>
        <img src="2.png" class="myImg"/>
      </swiper-slide>
      <swiper-slide>
        <img src="3.png" class="myImg"/>
      </swiper-slide>
      <swiper-slide>
        <img src="4.png" class="myImg"/>
      </swiper-slide>
      <swiper-slide>
        <img src="5.png" class="myImg"/>
      </swiper-slide>
      <swiper-slide>
        <img src="7.png" class="myImg"/>
      </swiper-slide>

  </swiper>
</template>

<style scoped>
.swiper {
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  height: 83vh;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #ffffff00;
}

.swiper-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: opacity 0.5s ease;
}

.swiper-slide-active .swiper-image {
  opacity: 1;
}
.myImg{
    object-position: center;
}

.swiper-slide-next .swiper-image,
.swiper-slide-prev .swiper-image {
  opacity: 0;
}
</style>
  