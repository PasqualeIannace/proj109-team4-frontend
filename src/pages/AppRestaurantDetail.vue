<script>
import axios from "axios";
import { store } from "../store.js"; // Import the store
import CartBTN from "../components/CartBTN.vue";

export default {
	props: ['logo'],
	name: "AppRestaurantDetail",
	components: {
		CartBTN,
	},
	data() {
		return {
			store,
			user: null
		};
	},
	mounted() {
		this.getFoodsByUser();
		this.getUserData();
	},
	methods: {
		getUserData() {
			const userId = this.$route.params.id;

			axios
				.get(`http://127.0.0.1:8000/api/users/${userId}`)
				.then((response) => {
					if (response.status === 200 && response.data.success) {
						this.user = response.data.payload;
						console.log("success", response.data.payload)
					} else {
						console.error("Error fetching user:", response);
					}
				})
				.catch((error) => {
					console.error("Error fetching user:", error);
				});
		},
		getUserActivityName() {
			return this.user ? this.user.activity_name : 'User Not Found';
		},

		getUserLogoActivity() {
			return this.user ? this.user.logo_activity : 'Logo Not Found';
		},

		goBack() {
			const scrollPosition = window.scrollY;

			// Naviga alla pagina precedente
			this.$router.go(-1);

			// Dopo il completamento della navigazione, posiziona la finestra nella posizione memorizzata
			this.$nextTick(() => {
				window.scrollTo(0, scrollPosition);
			});
		},
		getFoodsByUser() {
			const userId = this.$route.params.id;

			axios
				.get(`${store.apiUrl}foods/user/${userId}`)
				.then((response) => {
					if (response.status === 200 && response.data.success) {
						store.foodListByUser = response.data.payload;
					} else {
						console.error("Error fetching foods by user:", response);
					}
				})
				.catch((error) => {
					console.error("Error fetching foods by user:", error);
				});
		},
	},
};
</script>

<template>



	<div class="myMargin">
		<div class="restaurant-info text-center">
			<h1 class="text-white">{{ getUserActivityName() }}</h1>
			<img v-if="user" :src="user.logo_activity" alt="Logo Activity" class="logo-activity" />
		</div>
		<div class="d-flex justify-content-center position-relative">
			<a @click="goBack" class="text-body myBtn position-fixed glowing-btn back" style="cursor: pointer;">
				<i class="fas fa-long-arrow-alt-left me-2 glowing-txt"></i>
			</a>
			<img src="/3.png" class="food-img">
		</div>

		<div class="container d-flex flex-wrap text-decoration-none">
			<div class="ag-format-container" v-for="(food, index) in store.foodListByUser" :key="index">
				<div class="ag-courses_box">
					<div class="ag-courses_item">
						<a href="" @click="openModal(index)" class="ag-courses-item_link" data-bs-toggle="modal"
							:data-bs-target="'#exampleModal' + index">
							<div class="ag-courses-item_bg">
								<img :src="logo" alt="">

							</div>

							<div class="ag-courses-item_title">
								<h5>{{ food.name }}</h5>
							</div>

							<div class="ag-courses-item_date-box size-fixed">
								<img :src="food.image" class="w-100" />
							</div>

							<div class="ag-courses-item_date-box">
								<p class="card-text text-center fs-5">
									<b>€ {{ food.price }}</b>
								</p>
							</div>
						</a>
						<div class="bg-card">
							<div class="d-flex justify-content-around align-items-center cart">
								<CartBTN :food="food" />
							</div>
						</div>
					</div>
				</div>

				<!-- Modal info cibo-->
				<div class="modal fade text-black" :id="'exampleModal' + index" tabindex="-1"
					aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
						<div class="modal-content myModal">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">
									{{ food.name }}
								</h5>
								<button type="button" class="btn-close" data-bs-dismiss="modal"
									aria-label="Close"></button>
							</div>
							<div class="modal-body">
								<img :src="food.image" class="w-100 modal-img" />
								<h5 class="fw-bolder">INGREDIENTI</h5>
								<p>{{ food.ingredients }}</p>
								<h5 class="fw-bolder">DESCRIZIONE</h5>
								<p>{{ food.description }}</p>
							</div>
							<!-- <div class="modal-footer">
							</div> -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.restaurant-info {
	margin-top: 6.5rem;
}

.logo-activity {
	opacity: 0.5;
	border-radius: 50%;
	width: 20%;
}

span {
	color: lightcyan;
}

p {
	margin-top: 0.5em;
}

.food-img {
	width: 23em;
}

.bg-card {
	background-color: #472883f5;
}

.myBtn {
	padding-left: 0.32em;
	border: 2px solid #FC3966;
	border-radius: 13px;
	left: 20px;
	top: 100px;

	/* i {
		color: #3E2274;
	}*/

	&:hover {
		/* border: 2px solid #FD5933; */

		i {
			/* color: #FD5933; */
			transition: 1s;
	        transform: translateX(30px); 
		}
	}
}

.btn {
	background-color: black;
	border: 2px solid indigo;
}

.myModal {
	border-radius: 28px;
	background-color: #482883;
	color: #fff;
	background-image: url('ghost.png');
}

.modal-header,
.modal-footer {
	background-color: #FC3966;
}

.modal-img {
	border-radius: 1em;
	margin-bottom: 1em;
}

h1 {
	color: #f9b234;
}

.ag-format-container {
	width: calc(100% / 4);
	/* margin: 0 auto; */
}

.size-fixed {
	height: 16em;
	/* width: 16em; */
}

.arrow {
	margin-right: 0.5rem;
}

/* Stili per le card su schermi più grandi (desktop) */


@media screen and (max-width: 1560px) {
	.glowing-btn {
		background: #00fffb !important;
	}

	.back {
		z-index: 3;
	}

	i {
			/* color: #FD5933; */
			transition: 1s;
	        transform: translateX(14px); 
		}

	.me-2 {
		margin-right: -1rem !important;
    	margin-left: -22px;
	}
}

@media screen and (max-width: 1200px) {
	.ag-format-container {
		width: calc(100% / 3 - 30px);
		margin: 0 15px 30px;
	}
}

@media screen and (max-width: 992px) {
	.ag-format-container {
		width: calc(50% - 30px);
		margin: 0 15px 30px;
	}

	.size-fixed {
		height: 16em;
		/* max-width: 29em; */
	}
}

@media screen and (max-width: 576px) {
	.ag-format-container {
		width: calc(100% / 1);
		margin: 0 15px 30px;
	}

	.size-fixed {
		max-height: 20em;
		max-width: 29em;
	}

	.container {
		max-width: none;
	}
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

.ag-courses-item_link {
	display: block;
	padding: 30px 10px 0px 10px;
	background-color: #472883f5;
	overflow: hidden;
	text-decoration: none;
	position: relative;
}

.ag-courses-item_link:hover,
.ag-courses-item_link:hover .ag-courses-item_date {
	text-decoration: none;
	color: #fff;
}

.ag-courses-item_link:hover .ag-courses-item_bg {
	-webkit-transform: scale(10);
	-ms-transform: scale(10);
	transform: scale(10);
}

.ag-courses-item_title {
	max-height: 270px;

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

.ag-courses-item_date-box {
	font-size: 16px;
	color: #fff;
	z-index: 2;
	position: relative;

	img {
		height: 100%;
		object-fit: cover;
		border-radius: 1em;
	}
}

.ag-courses-item_date {
	font-weight: bold;
	color: #f9b234;
	text-decoration: none;
	-webkit-transition: color 0.5s ease;
	-o-transition: color 0.5s ease;
	transition: color 0.5s ease;
}

.ag-courses-item_bg {
	height: 128px;
	width: 128px;
	background-color: #FC3966;

	z-index: 1;
	position: absolute;
	top: -75px;
	right: -75px;

	border-radius: 50%;

	/* -webkit-transition: all 0.5s ease;
	-o-transition: all 0.5s ease; */
	transition: all 0.5s ease;
}
.cart :hover {
	color: black;
}

.glowing-btn {
  position: relative;
  color: hsl(186 100% 69%);
  cursor: pointer;
  padding: 0.35em 0.5em;
  border: 0.15em solid hsl(186 100% 69%);
  border-radius: 0.45em;
  background: none;
  perspective: 2em;
  /* font-family: "Raleway", sans-serif; */
  font-size: 2em;
  font-weight: 900;
  letter-spacing: 1em;

  /* -webkit-box-shadow: inset 0px 0px 0.5em 0px hsl(186 100% 69%),
    0px 0px 0.5em 0px var(--glow-color);
  -moz-box-shadow: inset 0px 0px 0.5em 0px hsl(186 100% 69%),
    0px 0px 0.5em 0px var(--glow-color); */
  box-shadow: inset 0px 0px 0.5em 0px hsl(186 100% 69%),
    0px 0px 0.5em 0px hsl(186 100% 69%);
  animation: border-flicker 2s linear infinite;
}

.glowing-txt {
  float: left;
  margin-right: -0.8em;
  /* -webkit-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
    0 0 0.45em hsl(186 100% 69%);
  -moz-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
    0 0 0.45em hsl(186 100% 69%); */
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em hsl(186 100% 69%);
  animation: text-flicker 3s linear infinite;
}

.glowing-btn::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.7;
  filter: blur(1em);
  transform: translateY(120%) rotateX(95deg) scale(1, 0.35);
  background: hsl(186 100% 69%);
  pointer-events: none;
}

.glowing-btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  z-index: -1;
  background-color: hsl(186 100% 69%);
  box-shadow: 0 0 2em 0.2em hsl(186 100% 69%);
  transition: opacity 100ms linear;
}

.glowing-btn:hover {
  color: rgba(0, 0, 0, 0.8);
  text-shadow: none;
  animation: none;
}

.glowing-btn:hover .glowing-txt {
  animation: none;
}

.glowing-btn:hover {
  animation: none;
  text-shadow: none;
  opacity: 1;
}

.glowing-btn:hover:before {
  filter: blur(1.5em);
  opacity: 1;
}

.glowing-btn:hover:after {
  opacity: 1;
}

@keyframes faulty-flicker {
  0% {
    opacity: 0.1;
  }
  2% {
    opacity: 0.1;
  }
  4% {
    opacity: 0.5;
  }
  19% {
    opacity: 0.5;
  }
  21% {
    opacity: 0.1;
  }
  23% {
    opacity: 1;
  }
  80% {
    opacity: 0.5;
  }
  83% {
    opacity: 0.4;
  }

  87% {
    opacity: 1;
  }
}

@keyframes text-flicker {
  0% {
    opacity: 0.1;
  }

  2% {
    opacity: 1;
  }

  8% {
    opacity: 0.1;
  }

  9% {
    opacity: 1;
  }

  12% {
    opacity: 0.1;
  }
  20% {
    opacity: 1;
  }
  25% {
    opacity: 0.3;
  }
  30% {
    opacity: 1;
  }

  70% {
    opacity: 0.7;
  }
  72% {
    opacity: 0.2;
  }

  77% {
    opacity: 0.9;
  }
  100% {
    opacity: 0.9;
  }
}

@keyframes border-flicker {
  0% {
    opacity: 0.1;
  }
  2% {
    opacity: 1;
  }
  4% {
    opacity: 0.1;
  }

  8% {
    opacity: 1;
  }
  70% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}


</style>
