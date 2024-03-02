<script>
import axios from "axios"; //importo Axios
import { store } from "./store.js"; //state management
import TheHeader from "./components/TheHeader.vue";
import Footer from "./components/Footer.vue";

import Swiper from "swiper";
import "swiper/css"; // Importa gli stili di Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default {
	components: {
		TheHeader,
		Footer,
	},
	data() {
		return {
			store,
			foodList: [],
			userList: [],
		};
	},
	mounted() {
		this.getFoods();
		this.getUsers();
		// swiper
		// Inizializza Swiper qui

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
	  modules: [Navigation, Pagination],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

	},
	methods: {
		getFoods() {
			// let url = this.store.apiUrl + this.store.apiEndpoint;
			// let url = "http://127.0.0.1:8000/api/foods";

			axios
				.get(`${this.store.apiUrl + this.store.apiEndpoint}`)
				.then((risultato) => {
					console.log(risultato);
					if (risultato.status === 200 && risultato.data.success) {
						console.log(risultato.data.results);
						this.store.foodList = risultato.data.payload;
						//console.log(risultato.data.payload, "il mio array");
					} else {
						//ToDo: distinguere il motivo dell'else.
						//es. controllare statusCode, presenza e veridicità di data.success
						console.error("Ops... qualcosa è andato storto");
					}
				})
				.catch((errore) => {
					console.error(errore);
				});
		},

		getUsers() {
			axios
				.get(`${this.store.apiUrl + this.store.apiUserEndpoint}`)
				.then((risultato) => {
					//console.log(risultato);
					if (risultato.status === 200 && risultato.data.success) {
						//console.log(risultato.data.results);
						this.store.userList = risultato.data.payload;
						//console.log(risultato.data.payload, "il mio array");
					} else {
						//ToDo: distinguere il motivo dell'else.
						//es. controllare statusCode, presenza e veridicità di data.success
						console.error("Ops... qualcosa è andato storto");
					}
				})
				.catch((errore) => {
					console.error(errore);
				});
		},
	},
};
</script>

<template>
	<TheHeader />
	<router-view></router-view>
	<Footer />
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use "./styles/general.scss";
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue

header {
	background-color: orangered;
}
</style>
