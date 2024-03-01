<script>

import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management
import TheHeader from "./components/TheHeader.vue"

export default {
	components: {
		TheHeader
	},
	data() {
		return {
			store,
		}
	},
	mounted() {
		this.getEventList();
	},
	methods: {
		getEventList() {
			let url = this.store.apiUrl + this.store.apiEventEndpoint;

			axios.get(url).then(risultato => {
				if (risultato.status === 200 && risultato.data.success) {
					console.log(risultato.data.results);
					this.store.eventList = risultato.data.results;
				} else {
					//ToDo: distinguere il motivo dell'else.
					//es. controllare statusCode, presenza e veridicità di data.success
					console.error("Ops... qualcosa è andato storto");
				}
			}).catch(errore => {
				console.error(errore);
			});
		}
	}
}
</script>

<template>
	<TheHeader />

	<router-view></router-view>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue

header {
	background-color: orangered;
}
</style>