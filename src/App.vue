<script>
import axios from "axios"; //importo Axios
import { store } from "./store.js"; //state management
// import AppSearch from "./pages/AppSearch.vue";
import TheHeader from "./components/TheHeader.vue";
import Footer from "./components/Footer.vue";

export default {
	components: {
		// AppSearch,
		TheHeader,
		Footer,
	},
	data() {
		return {
			store,
			foodList: [],
			userList: [],
			ghost1Top: 0,
      		ghost1Left: 0,
      		ghost2Top: 0,
      		ghost2Left: 0,
		};
	},
	mounted() {
		window.addEventListener('mousemove', this.handleMouseMove);
		this.getFoods();
	},

	beforeDestroy() {
    	window.removeEventListener('mousemove', this.handleMouseMove);
  	},

	methods: {
		handleMouseMove(event) {
      	// Calcola le nuove posizioni dei fantasmi in base alla posizione del mouse
      	this.ghost1Top = event.clientY / 20;
      	this.ghost1Left = event.clientX / 20;
      	this.ghost2Top = event.clientY / 15;
      	this.ghost2Left = event.clientX / 15;
    	},

		getFoods() {
			// let url = this.store.apiUrl + this.store.apiEndpoint;
			// let url = "http://127.0.0.1:8000/api/foods";

			axios.get(`${this.store.apiUrl + this.store.apiEndpoint}`).then((risultato) => {
					//console.log(risultato);
					if (risultato.status === 200 && risultato.data.success) {
						//console.log(risultato.data.results);
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
		// STAMPO I RISTORANTI
		getUsers(selectedTypes) {
			axios.get(`${this.store.apiUrl + this.store.apiUserEndpoint}`, {params: { types: selectedTypes } // Passa gli ID dei tipi selezionati come parametro
                }).then((risultato) => {
					//console.log(risultato);
					if (risultato.status === 200 && risultato.data.success) {
						//console.log(risultato.data.results);
						this.store.userList = risultato.data.payload;
						console.log(risultato.data.payload, "Stampo i ristoranti");
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
		// STAMPO I BOTTONI 
		fetchData() {
			//console.log('sei nel fetch');
            axios.get(`${this.store.apiUrl + this.store.apiTypesEndpoint}`).then((risposta) => {
                if (risposta.status === 200 && risposta.data.success) {
                    this.store.types = risposta.data.payload;
                    console.log(risposta.data.payload, "i miei pulsanti filtro");
                 } else {
                    console.error("Ops... qualcosa è andato storto con i tipi");
                 }
			})
                .catch((error) => {
                console.error("Errore durante il recupero dei tipi:", error);
                });
	    },
    },	
};
</script>

<template>
	<!-- <AppSearch @search="getUsers()" /> -->
	<TheHeader />
	<div class="ghost-container">
		<img class="ghost ghost-1" :style="{ top: ghost1Top + 'px', left: ghost1Left + 'px' }" src="ghost-1.png" alt="Ghost">
		<img class="ghost ghost-2" :style="{ top: ghost2Top + 'px', left: ghost2Left + 'px' }" src="ghost-2.png" alt="Ghost">
	</div>
	<router-view></router-view>
	<Footer />
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use "./styles/general.scss";
</style>

<style scoped lang="scss">

.ghost-container {
	position: fixed;
	width: 100%;
	height: 100%;
	pointer-events: none;
}

.ghost {
  position: absolute;
  width: 150px; /* Dimensioni del tuo fantasma */
  height: 150px;
  transition: transform 0.2s ease-in-out; /* Aggiungi una transizione per rendere il movimento più fluido */
}

.ghost-1 {

}

.ghost-2 {
  /* Imposta la posizione iniziale del fantasma 2 */
}
</style>