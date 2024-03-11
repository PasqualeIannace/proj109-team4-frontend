<script>
import { store } from "../store.js";
import SwiperComponent from "./SwiperComponent.vue";
import HomeSwiper from "./HomeSwiper.vue";
import Swiper from 'swiper';
import axios from "axios"; //importo Axios


export default {
  name: "Home",
  components: {
    Swiper,
    SwiperComponent,
	HomeSwiper
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
	<HomeSwiper />
    <!-- <SwiperComponent /> -->
  </div>
  <div class="d-flex justify-content-center">
	<img src="/logo.png" class="logo" alt="">
	<img src="/ristorboo.png" class="restaurant-logo" alt="">
  </div>
  

        <!-- SEARCH BY TAG -->
		<nav role="navigation">
    <div class="py-5 text-center">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="">
                    <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                        <!-- Itera sugli elementi e crea una casella di controllo per ciascuno -->
                        <template v-for="tipo in store.types">
							<input type="checkbox" class="btn-check" :id="'btncheck_' + tipo.id" autocomplete="off" 
                                :value="tipo.id" v-model="selectedTypes" @change="getUsers">
                                <label class="btn btn-outline m-1 rounded-5 myBtn"
                                       :for="'btncheck_' + tipo.id"
                                       :class="{ 'active': selectedTypes.includes(tipo.id) }">
                                    <img class="click-image" src="ghost.png" alt="Image" />
                                    {{ tipo.name }}
                                </label>
                            <!-- <input type="checkbox" class="btn-check" :id="'btncheck_' + tipo.id" autocomplete="off" 
                            :value="tipo.id" v-model="selectedTypes" @change="getUsers">
                            <label class="btn btn-outline-primary m-1 rounded-5 myBtn" :for="'btncheck_' + tipo.id">
								<img class="click-image" src="ghost.png" alt="Image" />
								{{ tipo.name }}
							</label> -->
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>
        <!-- RISTORANTI -->
        <div class="container">
			<div class="container d-flex flex-wrap">
			<div class="ag-format-container" v-for="user in store.userList" :key="userList.id" >
				<router-link :to="{ name: 'user-details', params: { id: user.id } }">
				<div class="ag-courses_box">
					<div class="ag-courses_item">
						<a href="#" class="ag-courses-item_link" :data-bs-target="'#exampleModal' + userList.id">
							<div class="ag-courses-item_bg"></div>

							<div class="ag-courses-item_title text-center">
								<p class="fs-5 mb-0">{{ user.activity_name }}</p>
                                <!-- Mostra solo i tipi associati a questo ristorante -->
                                   <span v-for="(tipo, index) in user.types" :key="index" class="myTypes rounded-pill">{{ tipo.name }}</span>                       
								</div>
								<div class="ag-courses-item_date-box logo-activity">
								<img :src="user.logo_activity" class="w-100" />
								</div>
							<div class="ag-courses-item_date-box">
								<!-- <p>{{ food.ingredients }}</p> -->
								<!-- <p class="card-text">{{ food.description }}</p> -->
								<p class="card-text text-center fs-5">
								</p>
								<div class="card-footer text-center ag-courses-item_date">
									<span>{{ user.address }}</span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</router-link>
			</div>
		</div>
        </div>
		<SwiperComponent />
</template>

<style scoped>
.logo{
	width: 70px;
	transition: transform 2s;
}
.logo:hover{
	transition: 1s;
	transform: translateX(450px); 
}

.restaurant-logo {
	max-width: 25em;
    max-height: 7em;
}

.mySize{
	font-size: 70px;
	margin-bottom: 0px;
	color: goldenrod;
}

.click-image {
    display: none;
    position: absolute;
    top: -50px;
    right: -50px;
    width: 20px;
    height: auto;
    z-index: 1;
    width: 150px;
}
.myTypes{
	padding: 5px 10px;
	border: 1px solid white;
    border-radius: 20px;
	color: white;
	font-size: 0.4em;
	margin: 1 rem;
}

/* BOTTONI FILTRI RISTORANTI */
a{
	text-decoration: none;
}
.btn-group {
		flex-wrap: wrap;
}
.myBtn{
    color: #FC3966;
    border: 2px solid #FC3966;
    width: 7em;
    height: 2.7em;
}
.myBtn:hover{
	color:#FD5933 !important;
	border: 2px solid  #FD5933;
}
.myBtn.active .click-image {
    display: block;
}
.myBtn.active{
	border: 4px solid #FD5933;
	color: #FD5933;
}
.ag-format-container {
	width: calc(100% / 4);
	/* margin: 0 auto; */
}
/* Stili per le card su schermi più grandi (desktop) */

@media screen and (max-width: 992px) {
	.ag-format-container {
		width: calc(50% - 30px);
		margin: 0 15px 30px;
	}
	.myDiv{
		display: block;
	}
}

@media screen and (max-width: 576px) {
	.ag-format-container {
		width: calc(100% / 1);
		margin: 0 15px 30px;
	}
}

body {
	background-color: #000;
}
.ag-courses_box {

	align-items: flex-start;
	/* -ms-flex-wrap: wrap; */
	flex-wrap: wrap;
	width: 100%;
	/* height: 300px; */
	padding: 10px 0;
}
.ag-courses_item {
	/* width:100%; */
	flex-basis: calc(33.33333% - 30px);
	margin: 0 15px 30px;
	overflow: hidden;

	border-radius: 28px;
}

.ag-courses-item_link:hover,
.ag-courses-item_link:hover .ag-courses-item_date {
	color: #fff;
}
.ag-courses-item_link:hover .ag-courses-item_bg {
	-webkit-transform: scale(10);
	-ms-transform: scale(10);
	transform: scale(10);
}
.ag-courses-item_title {
	max-height: 270px;
	margin: 0 0 25px;

	overflow: hidden;

	font-weight: bold;
	font-size: 30px;
	color: #fff;

	z-index: 2;
	position: relative;

	h5 {
		height: 3rem;
	}
}
/* CARD */

	/* BACKGROUNG */
	.ag-courses-item_link {
		display: block;
		padding: 30px 20px;
		background-color: #472883f5;
		overflow: hidden;
		position: relative;
	}

	/* IMAGE */
	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: 1em;
	}

	.logo-activity {
		border-radius: 1em;
	}
	
	/* HOVER */
	.ag-courses-item_bg {
		height: 128px;
		width: 128px;
		background-color: #FC3966;
		z-index: 1;
		position: absolute;
		top: -75px;
		right: -75px;
		border-radius: 50%;
		-webkit-transition: all 0.5s ease;
		-o-transition: all 0.5s ease;
		transition: all 0.5s ease;
	}

.ag-courses-item_date-box {
	/* height: 15rem; */
	font-size: 16px;
	color: #fff;
	z-index: 2;
	position: relative;
}

/* CARD STREET TEXT */
.ag-courses-item_date {
	font-weight: bold;
	color: #fff;
	text-decoration: none;
	-webkit-transition: color 0.5s ease;
	-o-transition: color 0.5s ease;
	transition: color 0.5s ease;
}



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
</style>
