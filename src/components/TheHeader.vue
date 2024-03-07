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
						<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
							data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
							aria-label="Toggle navigation">
							<img src="/logo.png" class="logo" alt="">
							<span class="align-middle ms-2">Menu</span>
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
							<li class="nav-item">
								<router-link to="/" class="nav-link myA">
									<a href="#top" class="nav-link myA" @click="scrollToTop">Deliveboo</a>
								</router-link>
							</li>

							<li class="nav-item dropdown">
								<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
									data-bs-toggle="dropdown" aria-expanded="false">
									<i class="fa-solid fa-circle-info"></i> Info
								</a>
								<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<li class="nav-bg">
										<router-link to="/about" class="text-decoration-none">
											<a class="dropdown-item text-dark" href="">Chi siamo</a>
										</router-link>
									</li>
									<li class="nav-bg">
										<a class="dropdown-item text-dark" href="http://127.0.0.1:8000/">Lavora con noi</a>
									</li>
								</ul>
							</li>
						</ul>
						<router-link class="nav-link me-5 carrello" :class="$route.name == 'cart' ? 'active' : ''"
							aria-current="page" :to="{ name: 'cart' }">
							<i class="fa-solid fa-cart-shopping fa-lg"></i>
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

#navbarDropdownMenuLink {
    margin-top: 0.4em;
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
	background: #FC3966;
}

a.dropdown-toggle {
	color: #FC3966 !important;

	&:hover {
		color: #FD5933 !important;
	}
}

router-link.dropdown-item:hover {
	color: black !important;
}

.dropdown-item:hover {
	background: #140934 !important;
	color: #FC3966 !important;
	border-radius: 0.3em;
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

.carrello {
	color: #FC3966;

	&:hover {
		color: #FD5933;
	}

	&:hover .bg-secondary {
		border: 2px solid #FD5933;
	color: #FD5933;
	}

}

.bg-secondary {
	background-color: #140934 !important;
	border: 2px solid #FC3966;
	color: #FC3966;	
}

#mainNavigation {
	padding-bottom: 15px;
	position: fixed;
	top: 0;
	/* left:0; */
	width: 100%;
	z-index: 123;
	background-color: #929292;
}

#navbarNavDropdown.collapsing .navbar-nav,
#navbarNavDropdown.show .navbar-nav {
	padding: 1em;
}

/* NAV RIDOTTA */
.navbar-toggler {
	border: none;

	span {
		color: #FC3966;
	}
}
</style>
