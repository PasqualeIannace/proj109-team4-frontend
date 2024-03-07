<script>
import { store } from "../store.js";

export default {
	name: "TheHeader",
	components: {
	},
	data() {
		return {
			store,
		};
	},
	mounted() {

	},
	methods: {
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Per uno scorrimento fluido
        });
    }
}
};
</script>

<template>
	<header>
		<div id="mainNavigation">
			<nav role="navigation">
				<div class="navbar-expand-md">
					<div class="navbar-dark text-center my-2">
						<button class="navbar-toggler w-75" type="button" data-bs-toggle="collapse"
							data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
							aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
							<span class="align-middle">Menu</span>
						</button>
					</div>
					<div class="text-center mt-3 collapse navbar-collapse" id="navbarNavDropdown">
						<div>
							<router-link to="/" class="nav-link myA">
								<a @click="scrollToTop" >
									<img src="/logo.png" class="logo" alt="">
								</a>
							</router-link>

						</div>
						<ul class="navbar-nav mx-auto">
							<li class="nav-item orangetext">
								<router-link to="/" class="nav-link myA">
									<a href="#top" class="nav-link myA" @click="scrollToTop">Deliveboo</a>
								</router-link>
							</li>

							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
									data-bs-toggle="dropdown" aria-expanded="false">
									Company
								</a>
								<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<li>
										<router-link to="/about">
											<a class="dropdown-item text-dark" href="">Chi siamo</a>
										</router-link>
									</li>
									<li>
										<a class="dropdown-item text-dark" href="#">Contact us</a>
									</li>
								</ul>
							</li>
						</ul>
						<router-link class="nav-link me-5" :class="$route.name == 'cart' ? 'active' : ''"
							aria-current="page" :to="{ name: 'cart' }">
							<i class="fa-solid fa-cart-shopping"></i>
							<span v-if="$store.state.cart.length > 0"
								class="align-items-center justify-content-center translate-middle badge rounded-pill bg-secondary">
								{{ $store.state.cart.length }}
							</span>
						</router-link>
					</div>
				</div>
			</nav>
		</div>

	</header>
</template>

<style scoped>
.logo {
	width: 4em;
	margin-left: 1em;
}

/* Quando una voce di menu è attiva, mantieni il colore chiaro */
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

#mainNavigation .myA {
	font-family: "Cabin", sans-serif;
	font-size: 14px;
	color: #FC3966;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 2px;
	text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
}

#mainNavigation .myA:hover {
	color: #FD5933;
}

.dropdown-menu {
	background: #f9b234;
}

a.dropdown-toggle {
	color: #f9b234 !important;
}

router-link.dropdown-item:hover {
	color: black !important;
}

.nav-item a {
	color: black;
}

.nav-item a:hover {
	color: black;
}

.nav-item {
	min-width: 12vw;
	/* max-height: 10vh; */
}

#mainNavigation {
	padding-bottom: 15px;
	position: fixed;
	top: 0;
	/* left:0; */
	width: 100%;
	z-index: 123;
	/* padding-bottom:120px; */
	/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0.65+0,0+100;Neutral+Density */
	/* background: -moz-linear-gradient(
		top,
		rgba(0, 0, 0, 0.65) 0%,
		rgba(0, 0, 0, 0) 100%
	); /* FF3.6-15 */
	/* background: -webkit-linear-gradient(
		top,
		rgba(0, 0, 0, 0.65) 0%,
		rgba(0, 0, 0, 0) 100%
	); Chrome10-25,Safari5.1-6
	background: linear-gradient(
		to bottom,
		rgba(0, 0, 0, 0.65) 0%,
		rgba(0, 0, 0, 0) 100%
	); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	/* filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 ); IE6-9  */
	background-color: #140934;
}

#navbarNavDropdown.collapsing .navbar-nav,
#navbarNavDropdown.show .navbar-nav {
	background: #f9b234;
	padding: 12px;
}
</style>
