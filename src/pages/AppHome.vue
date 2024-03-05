<script>
import { store } from "../store.js";
import SwiperComponent from "./SwiperComponent.vue";
import Swiper from 'swiper';

export default {
  name: "Home",
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

}
</script>

<template>


<!-- RISTORANTI -->
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

</style>
