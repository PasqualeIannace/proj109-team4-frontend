<script>
export default {
    name: "Footer",
    data() {
        return {

        }
    },
}
</script>

<template>
    <footer class="myborder">
        <div class="footer-top blue text-white">
            <div class="container-sm">
                <div class="row pt-2">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-12">
                        <div class="row justify-content-center">
                            <div class="col-12 text-center">
                                <span class="fs-6">LOCATION</span>
                            </div>                            
                        </div>
                        <div class="row">
                            <div class="col-12 text-center">
                                <span class="fs-6">XX Settembre, GE</span>
                            </div>    
                        </div>
                        <div class="row justify-content-center text-center">
                            <div class="col-12 text-center">
                                <span class="fs-6">54243</span>
                            </div>  
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-12">
                        <div class="row">
                            <div class="col-12 text-center">
                                <span class="fs-6">AROUND THE WEB</span>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-2">
                                <div id="circle" class="text-center">
                                    <i class="fa-brands fa-facebook-f fa-lg"></i>
                                </div>
                            </div>
                            <div class="col-2">
                                <div id="circle" class="text-center">
                                    <i class="fa-brands fa-google-plus-g fa-lg"></i>
                                </div>
                            </div>
                            <div class="col-2">
                                <div id="circle" class="text-center">
                                    <i class="fa-brands fa-twitter fa-lg"></i>
                                </div>
                            </div>
                            <div class="col-2">
                                <div id="circle" class="text-center">
                                    <i class="fa-brands fa-linkedin-in fa-lg"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-12">
                        <div class="row justify-content-center">
                            <div class="col-12 text-center">
                                <span class="fs-5 Mytext">DELIVEBOO</span>
                            </div>                            
                        </div>
                        <div class="row">
                            <div class="col-12 text-center">
                                <span class="fs-6">Freelance is a free to use, open source Bootstrap theme created by <a href="#" id="start">Start Bootstrap</a>.</span>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom dark-blue text-white">
            <div class="container-sm py-2">
                <div class="row justify-content-center position-relative">
                    <img src="/ghost.png" id="myFooterimg">
                    <img src="/ghost.png" id="myFooterimg2">
                    <div class="col-12 text-center">
                        <a class="nav-link myA text-light" href="http://127.0.0.1:8000/" target="_blank">
						Lavora con noi
					</a>    
					<router-link to="/about">
						Chi siamo
					</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <p class="text-light">Copyright <i class="fa-regular fa-copyright"></i> 2024 - Team <strong>4</strong> Classe <strong>109</strong>. All rights reserved.Progetto finale di Boolean sviluppato da <strong>Pasquale Iannace</strong>, <strong>Francesca Picoco</strong>, <strong>Thomas Salvaterra</strong>, <strong>Muhammad Israr</strong>, <strong>Abdullah Azza</strong>.</p>
        </div>
    </footer>
</template>

<style scoped>
.Mytext{
    color: orange;
}
#myFooterimg{
    width: 200px;
    position: absolute;
    bottom: 0px;
    right: 700px;
}
#myFooterimg2{
    width: 200px;
    position: absolute;
    bottom: 0px;
    right: 400px;
    transform: scaleX(-1);
}
footer{
    background-color: rgba(0, 0, 0, 0.511);
}
.myborder {
	border-bottom: 2px solid orange;
	padding-top: 3vh;
    border-top:  2px solid orange;
}
a{
    color: goldenrod;
    text-decoration: none;
}
</style>