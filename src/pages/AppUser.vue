<script>
import { store } from "../store.js";
import SwiperComponent from "./SwiperComponent.vue";
import Swiper from 'swiper';

export default {
  name: "AppUser",
  components: {
    Swiper,
    SwiperComponent
  },
  data() {
    return {
      store,
      userList: [],
    }
  },
//   mounted() {
//     var swiper = new Swiper(".mySwiper", {
//       slidesPerView: 1,
//       spaceBetween: 30,
//       loop: true,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//     });
//   }   
}
</script>


<!-- <template>
<div class="row">
    <div class="col-10 offset-1 text-center">
        <h1>RISTORANTI</h1>
    </div>
</div>
<div class="swiper mySwiper">
    <div class="swiper-wrapper text-dark" v-for="user in store.userList" :key="user.id">
      <div class="swiper-slide">{{ user.activity_name }}</div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>
</template> -->
<template>
<div>
    <SwiperComponent />
  </div>
        <h1 class="text-center">Ristoranti</h1>

        <div class="container">
            <div class="row">

                <div class="col-md-4 gy-4" v-for="user in store.userList">
                    <div class="card h-100">
                        <div class="card-header text-center myCard">
                            <b>{{ user.activity_name }}</b>
                            <img :src="user.logo_activity" alt="Logo" class="w-100">
                        </div>
                        <div class="card-body">
                             <!-- <h5 class="card-title text-center">{{ food.n }}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">
                                {{ food.user ? food.user.name : "Utente sconosciuto" }}
                            </h6>
                            <p class="card-text">{{ food.description }}</p>
                            <p class="card-text text-center fs-5">Rimangono <b>{{ food.available_tickets }}</b> biglietti
                                disponibili.
                            </p>  -->
                        </div>
                        <div class="card-footer text-center">
                          <router-link :to="{ name: 'user-details', params: { id: user.id } }" class="btn btn-primary">
                                <font-awesome-icon icon="fa-solid fa-circle-info" class="me-2" />
                                <span>Mostra dettagli</span>
                          </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<style scoped>

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
</style>
