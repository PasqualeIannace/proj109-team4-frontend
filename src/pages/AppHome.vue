<script>
import { store } from "../store.js";
import SwiperComponent from "./SwiperComponent.vue";
import Swiper from 'swiper';
import axios from "axios"; //importo Axios


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
      selectedTypes:[],
    }
  },

  mounted() {
    this.getUsers();
	this.fetchData();
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

        getUsers() {
      // Ottieni gli ID dei tipi di ristorante selezionati
      const selectedTypeIds = this.selectedTypes;
      
      // Effettua la chiamata API per ottenere gli utenti filtrati
      axios
        .get(`${this.store.apiUrl + this.store.apiUserEndpoint}`, {
          params: { selectedTypes: selectedTypeIds },
        })
        .then((response) => {
          // Aggiorna la lista degli utenti con i risultati filtrati
          this.store.userList = response.data.payload;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },

    fetchData() {
    //console.log('sei nel fetch');
    axios
        .get(`${this.store.apiUrl}${this.store.apiTypesEndpoint}`)
        // Correggi l'utilizzo delle virgolette per l'interpolazione della stringa
        .then((risposta) => {
            if (risposta.status === 200 && risposta.data.success) {
                this.store.types = risposta.data.payload;
                //this.store.selectedTypes.push(types);
                //console.log(this.store.selectedTypes, "il mio array di tipi");
                console.log(this.store.types);
            } else {
                console.error("Ops... qualcosa è andato storto con i tipi");
            }
        })
        .catch((error) => {
            console.error("Errore durante il recupero dei tipi:", error);
        });
},
    
	},

}
</script>

<template>


<!-- RISTORANTI -->
<div>
    <SwiperComponent />
  </div>
        <h1 class="text-center">Ristoranti</h1>

        <!-- SEARCH BY TAG -->
        <nav role="navigation">
		<div class="py-5 text-center myborder">
			<!-- <img src="" alt="" class="logo "> -->
			<div class="">
				<div class="row d-flex justify-content-center">
                    <div class="col-4 d-flex justify-content-center">
                        <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                    <!-- Itera sugli elementi e crea una casella di controllo per ciascuno -->
                    <template v-for="tipo in store.types">
                        <input type="checkbox" class="btn-check" :id="'btncheck_' + tipo.id" autocomplete="off" 
                            :value="tipo.id" v-model="selectedTypes" @change="getUsers">
                        <label class="btn btn-outline-primary" :for="'btncheck_' + tipo.id">{{ tipo.name }}</label>
                    </template>
            </div>
    </div>
</div>
			</div>
		</div>
	</nav>

        <!-- RISTORANTI -->
        <div class="container">
            <div class="row">

                <div class="col-md-4 gy-4" v-for="user in store.userList">
                    <div class="card h-100">
                        <router-link :to="{ name: 'user-details', params: { id: user.id } }">
                            <div class="card-header text-center myCard">
                                <b>{{ user.activity_name }}</b>
                            </div>
                            <div class="card-body">
                                <img :src="user.logo_activity" alt="Logo" class="w-100">
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
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
