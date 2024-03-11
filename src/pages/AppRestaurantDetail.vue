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
		<img :src="logo" alt="">
		<h1 class="text-center">il nostro menù</h1>

		<div class="container d-flex flex-wrap text-decoration-none">
			<div class="ag-format-container" v-for="(food, index) in store.foodListByUser" :key="index">
				<div class="ag-courses_box">
					<div class="ag-courses_item">
						<a href="" @click="openModal(index)" class="ag-courses-item_link" data-bs-toggle="modal"
							:data-bs-target="'#exampleModal' + index">
							<div class="ag-courses-item_bg"></div>

							<div class="ag-courses-item_title">
								<h5>{{ food.name }}</h5>
								<img :src="food.image" class="w-100" />
							</div>

							<div class="ag-courses-item_date-box">
								<p class="card-text text-center fs-5">
									<b>€ {{ food.price }}</b>
								</p>

								<div class="card-footer text-center ag-courses-item_date"></div>
							</div>
						</a>
						<div class="bg-white">
							<div class="d-flex justify-content-between align-items-center cart">
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
								<p>{{ food.ingredients }}</p>
								<p>{{ food.description }}</p>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.btn {
	background-color: #fa8c31;
	border: 2px solid indigo;
}

.myModal {
	border-radius: 28px;
	background-color: rgba(76, 0, 130, 0.696);
	color: #fff;
	background-image: url('ghost.png');
}

.modal-header,
.modal-footer {
	background-color: #fa8c31;
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

.ag-courses-item_link {
	display: block;
	padding: 30px 20px;
	background-color: #121212;
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

	img {
		height: 5.7em;
		object-fit: cover;
		border-radius: 1em;
	}
}

.ag-courses-item_date-box {
	/* height: 15rem; */
	font-size: 16px;
	color: #fff;
	z-index: 2;
	position: relative;
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
	background-color: #f9b234;

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
