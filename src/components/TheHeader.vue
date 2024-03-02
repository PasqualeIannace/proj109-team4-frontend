<script>
export default {
	name: "TheHeader",
	data() {
		return {
			menuItems: [
				{
					routeName: "home",
					label: "Homepage",
				},
				{
					routeName: "about",
					label: "Chi siamo",
				},
				{
					routeName: "foods",
					label: "Food",
				},
				{
					routeName: "users",
					label: "Ristoranti",
				},
			],
		};
	},
};
</script>

<template>
	<!-- <header>
		<nav class="navbar navbar-expand-lg bg-light">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">
					<img src="/logo.png" class="logo" alt=""
				/></a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li
							class="nav-item"
							v-for="(item, index) in menuItems"
							:key="index"
						>
							<router-link :to="{ name: item.routeName }" class="nav-link">
								{{ item.label }}
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header> -->
	<header>
	<div id="mainNavigation">
      <nav role="navigation">
        <div class="py-5 text-center myborder">
          <!-- <img src="" alt="" class="invert "> -->
        </div>
      </nav>
      <div class="navbar-expand-md">
        <div class="navbar-dark text-center my-2">
          <button class="navbar-toggler w-75" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span> <span class="align-middle">Menu</span>
          </button>
        </div>
        <div class="text-center mt-3 collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mx-auto ">
            <li class="nav-item orangetext" v-for="(item, index) in menuItems" :key="index">
				<router-link :to="{ name: item.routeName }" class="nav-link myA">
								{{ item.label }}
				</router-link>
            </li>
           
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Company
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item text-dark" href="#">Blog</a></li>
                <li><a class="dropdown-item text-dark" href="#">About Us</a></li>
                <li><a class="dropdown-item text-dark" href="#">Contact us</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
</header>
</template>

<style scoped>
.myborder{
	border-bottom: 2px solid orange;	
    padding-top: 3vh;
}
	#mainNavigation .myA {
      font-family: 'Cabin', sans-serif;
      font-size:14px;
	  color: #f9b234;
	  font-weight: 600;
      text-transform:uppercase;
      letter-spacing:2px;
      text-shadow:1px 1px 2px rgba(0,0,0,0.4)
    }
    .dropdown-menu {
      background:#f9b234;
    }
    a.dropdown-toggle {
      color: #f9b234 !important
    }
    router-link.dropdown-item:hover {
      color:black !important
    }
    .nav-item a{
      color:black;
    }
    .nav-item a:hover {
      color: black;
    }
    .nav-item{
      min-width:12vw;
	  /* max-height: 10vh; */
    }
    #mainNavigation {
      position:fixed;
      top:0;
      /* left:0; */
      width:100%;
      z-index:123;
      /* padding-bottom:120px; */
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0.65+0,0+100;Neutral+Density */
    background: -moz-linear-gradient(top,  rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
    }
    #navbarNavDropdown.collapsing .navbar-nav,
    #navbarNavDropdown.show .navbar-nav{
      background:#f9b234;
      padding:12px;
    }
</style>
