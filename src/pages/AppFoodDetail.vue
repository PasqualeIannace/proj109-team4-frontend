<script>
import { store } from "../store.js" //state management
import axios from 'axios'; //importo Axios

export default {
	name: "AppFoodDetail",
	props: ["id"],
	data() {
		return {
			store,
			food: null,
			error: false,
		};
	},
	mounted() {
		// this.event = this.store.eventList.find(item => item.id == this.id);
		this.getEventDetail();
	},
	methods: {
		getEventDetail() {
			let url = this.store.apiUrl + this.store.apiEndPoint + this.id;

			axios
				.get(url)
				.then((result) => {
					if (result.status === 200) {
						if (result.data.success) {
							this.food = result.data.payload;
						} else {
							console.error(
								"Ops... non siamo in grado di soddisfare la richiesta."
							);
							this.error = true;
						}
					} else if (result.status === 301) {
						console.error("Ops... ciò che cerchi non si trova più qui.");
					} else if (result.status === 400) {
						console.error(
							"Ops... non riusciamo a comprendere ciò che hai richiesto."
						);
					} else if (result.status === 404) {
						console.error(
							"Ops... non riusciamo a trovare ciò che hai richiesto."
						);
					} else if (result.status === 500) {
						console.error(
							"Ops... ci scusiamo per l'inconveniente, stiamo spegnendo l'incendio."
						);
					}
				})
				.catch((errore) => {
					console.error(errore);
					this.$router.push({ name: "Foods" }); // redireziona alla lista eventi
				});
		},
	},
};
</script>

<template>
	<div class="container">
		<div class="row">
			<!-- <h1 class="mt-5 mb-3 text-center">Dettaglio evento {{ $route.params.id }}</h1> -->
			<div class="ag-format-container">
				<div class="ag-courses_box">
					<div class="ag-courses_item">
						<a href="#" class="ag-courses-item_link">
							<div class="ag-courses-item_bg"></div>

							<div class="ag-courses-item_title">
                                <h1>{{ food.name.id }}</h1>
							</div>

							<div class="ag-courses-item_date-box">
								Start:
								<span class="ag-courses-item_date"> 04.11.2022 </span>
							</div>
						</a>
					</div>

					<div class="ag-courses_item">
						<a href="#" class="ag-courses-item_link">
							<div class="ag-courses-item_bg"></div>

							<div class="ag-courses-item_title">
								UX/UI Web-Design&#160;+ Mobile Design
							</div>

							<div class="ag-courses-item_date-box">
								Start:
								<span class="ag-courses-item_date"> 04.11.2022 </span>
							</div>
						</a>
					</div>

					<div class="ag-courses_item">
						<a href="#" class="ag-courses-item_link">
							<div class="ag-courses-item_bg"></div>

							<div class="ag-courses-item_title">
								Annual package "Product+UX/UI+Graph designer&#160;2022"
							</div>

							<div class="ag-courses-item_date-box">
								Start:
								<span class="ag-courses-item_date"> 04.11.2022 </span>
							</div>
						</a>
					</div>

					<div class="ag-courses_item">
						<a href="#" class="ag-courses-item_link">
							<div class="ag-courses-item_bg"></div>

							<div class="ag-courses-item_title">Graphic Design</div>

							<div class="ag-courses-item_date-box">
								Start:
								<span class="ag-courses-item_date"> 04.11.2022 </span>
							</div>
						</a>
					</div>

					<div class="ag-courses_item">
						<a href="#" class="ag-courses-item_link">
							<div class="ag-courses-item_bg"></div>

							<div class="ag-courses-item_title">Motion Design</div>

							<div class="ag-courses-item_date-box">
								Start:
								<span class="ag-courses-item_date"> 30.11.2022 </span>
							</div>
						</a>
					</div>

					<div class="ag-courses_item">
						<a href="#" class="ag-courses-item_link">
							<div class="ag-courses-item_bg"></div>

							<div class="ag-courses-item_title">
								Front-end development&#160;+ jQuery&#160;+ CMS
							</div>
						</a>
					</div>

					<div class="ag-courses_item">
						<a href="#" class="ag-courses-item_link">
							<div class="ag-courses-item_bg"></div>
							<div class="ag-courses-item_title">Digital Marketing</div>
						</a>
					</div>

					<div class="ag-courses_item">
						<a href="#" class="ag-courses-item_link">
							<div class="ag-courses-item_bg"></div>

							<div class="ag-courses-item_title">Interior Design</div>

							<div class="ag-courses-item_date-box">
								Start:
								<span class="ag-courses-item_date"> 31.10.2022 </span>
							</div>
						</a>
					</div>
				</div>
			</div>
			<h1 class="mt-5 mb-3 text-center">Dettaglio evento {{ id }}</h1>
		</div>
	</div>
</template>

<style scoped>
.ag-format-container {
	width: 1142px;
	margin: 0 auto;
}

body {
	background-color: #000;
}
.ag-courses_box {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: start;
	-ms-flex-align: start;
	align-items: flex-start;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;

	padding: 50px 0;
}
.ag-courses_item {
	-ms-flex-preferred-size: calc(33.33333% - 30px);
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
	min-height: 87px;
	margin: 0 0 25px;

	overflow: hidden;

	font-weight: bold;
	font-size: 30px;
	color: #fff;

	z-index: 2;
	position: relative;
}
.ag-courses-item_date-box {
	font-size: 18px;
	color: #fff;

	z-index: 2;
	position: relative;
}
.ag-courses-item_date {
	font-weight: bold;
	color: #f9b234;

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
	background-color: #952aff;
}
.ag-courses_item:nth-child(5n) .ag-courses-item_bg {
	background-color: #cd3e94;
}
.ag-courses_item:nth-child(6n) .ag-courses-item_bg {
	background-color: #4c49ea;
}

@media only screen and (max-width: 979px) {
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
}
</style>
