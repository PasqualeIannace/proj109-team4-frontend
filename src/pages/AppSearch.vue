<script>
import { store } from "../store.js";
export default {
	name: "AppSearch",
	data() {
		return {
			store
		}
	}
}
</script>

<template>
	<nav role="navigation">
		<div class="py-5 text-center myborder">
			<!-- <img src="" alt="" class="logo "> -->
			<div class="">
				<div class="row d-flex justify-content-center">
					<div class="col-4">
						<div class="input-group mb-3">
							<input type="text" class="form-control input-text myInput" placeholder="Search products...."
								aria-label="Recipient's username" aria-describedby="basic-addon2" v-model="store.searched"
								@keyup.enter="$emit('search')" />
							<div class="input-group-append">
								<button @click="$emit('search', store.searched)" class="btn btn-outline-warning"
									type="button">
									cerca
									<i class="fa-solid fa-magnifying-glass" style="color: #dea917;"></i>
								</button>
							</div>
						</div>
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