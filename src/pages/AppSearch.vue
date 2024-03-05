<script>
import { store } from "../store.js";
import axios from "axios"; //importo Axios

export default {
	name: "AppSearch",
	data() {
		return {
			store,
			selectedTypes: [], 
		};
	},
	mounted() {
		this.getTypes();
	},
	methods: {
		getTypes() {
			axios
				.get(`${this.store.apiUrl + this.store.apiTypesEndpoint}`)
				.then((risultato) => {
                    // console.log(this.types , "ecco")
					console.log(risultato);
					if (risultato.status === 200 && risultato.data.success) {
						// console.log(risultato.data.payload);
                        //this.setTypes(risultato.data.payload); // Aggiorna lo stato utilizzando la mutazione
						//console.log(risultato.data.payload, "ecco")
                        this.store.types = risultato.data.payload;
						console.log(risultato.data.payload, "il mio array");
					} else {
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
	<nav role="navigation">
		<div class="py-5 text-center myborder">
			<!-- <img src="" alt="" class="logo "> -->
			<div class="">
				<div class="row d-flex justify-content-center">
					<div class="col-4 d-flex justify-content-center">
						<div class="btn-group" role="group" aria-label="Basic checkbox toggle button group" v-for="SingleType in store.types" style="color: #dea917">
                        <input type="checkbox" class="btn-check" id="{{ SingleType.id }}" autocomplete="off">
                        <label class="btn btn-outline-primary" for="{{ SingleType.id }}">{{SingleType.name}}</label>
                        </div>

						<!-- <input type="text" class="form-control input-text myInput" placeholder="Search products...." aria-label="Recipient's username" aria-describedby="basic-addon2" v-model="store.searched" @keyup.enter="$emit('search')"/>
						<div class="input-group-append">
							<button @click="$emit('search')" class="btn btn-outline-warning" type="button">
								cerca
								<i class="fa-solid fa-magnifying-glass" style="color: #dea917"></i>
							</button>
						</div> -->
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>
<style scoped>
.active {
	color: rgb(252, 255, 74);
}
.myInput::placeholder {
	color: #f8c146;
}
.btn:hover {
	color: black;
}

.input-text:focus {
	box-shadow: 0px 0px 0px;
	border-color: #f8c146;
	outline: 0px;
}

.form-control {
	border: 1px solid #f8c146;
	background-color: transparent;
}

.myborder {
	border-bottom: 2px solid orange;
	padding-top: 3vh;
}
</style>