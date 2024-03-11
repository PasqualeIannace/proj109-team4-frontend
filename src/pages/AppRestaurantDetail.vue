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
		};
	},
	mounted() {
		this.getFoodsByUser();
	},
	methods: {
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
		<div class="d-flex justify-content-center position-relative">
			<a @click="goBack" class="text-body myBtn position-absolute" style="cursor: pointer;">
				<i class="fas fa-long-arrow-alt-left me-2"><span>GO BACK</span></i>
			</a>

			<img src="/3.png" class="w-25">
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

							<div class="ag-courses-item_date-box">
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
span {
	color: lightcyan;
}

p {
	margin-top: 0.5em;
}

.bg-card {
	background-color: #482883;
}

.myBtn {
	border: 2px solid lightcyan;

	border-radius: 20px;
	left: 100px;
	top: 100px;
}

.btn {
	background-color: #FC3966;
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

/* Stili per le card su schermi più grandi (desktop) */
@media screen and (max-width: 992px) {
	.ag-format-container {
		width: calc(50% - 30px);
		margin: 0 15px 30px;
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
    padding: 30px 20px 0px 20px;
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
		height: 14em;
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

	-webkit-transition: all 0.5s ease;
	-o-transition: all 0.5s ease;
	transition: all 0.5s ease;
}

.ag-courses_item:nth-child(2n) .ag-courses-item_bg {
	background-color: #3ecd5e;
}

.ag-courses_item:nth-child(3n) .ag-courses-item_bg {
	background-color: #e44002;
}

.ag-courses_item:nth-child(4n) .ag-courses-item_bg {
	background-color: #492a84db;
}

.ag-courses_item:nth-child(5n) .ag-courses-item_bg {
	background-color: #cd3e94;
}

.ag-courses_item:nth-child(6n) .ag-courses-item_bg {
	background-color: #4c49ea;
}

.cart :hover {
	color: black;
}

/* @media only screen and (max-width: 979px) {
	.ag-courses_item {
		-ms-flex-preferred-size: calc(50% - 30px);
		flex-basis: calc(50% - 30px);
	}
	.ag-courses-item_title {
		font-size: 24px;
	}
}

@media only screen and (max-width: 767px) {
	.ag-format-container {
		width: 96%;
	}
}
@media only screen and (max-width: 639px) {
	.ag-courses_item {
		-ms-flex-preferred-size: 100%;
		flex-basis: 100%;
	}
	.ag-courses-item_title {
		min-height: 72px;
		line-height: 1;

		font-size: 24px;
	}
	.ag-courses-item_link {
		padding: 22px 40px;
	}
	.ag-courses-item_date-box {
		font-size: 16px;
	}
} */
</style>
