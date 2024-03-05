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
						<div class="btn-group" role="group" aria-label="Basic checkbox toggle button group" v-for="SingleType in store.types">
                        <input type="checkbox" @click="getUsers()"  class="btn-check" :id="'btncheck_' + SingleType.id" autocomplete="off" v-model="selectedTypes">
                        <label class="btn btn-outline-primary" :for="'btncheck_' + SingleType.id">{{SingleType.name}}</label>
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
