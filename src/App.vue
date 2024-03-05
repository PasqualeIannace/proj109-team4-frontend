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
		};
	},
	mounted() {
		this.getFoods();
		this.getUsers();
		this.fetchData();
	},
	methods: {
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

</style>