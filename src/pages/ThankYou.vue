
<script>
import { store } from "../store.js" //state management
export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        goBack() {
            // Redirect to the restaurants page or the appropriate route
            this.$router.push({ name: 'home' }); // Update with your actual route name
        },

        async handleCheckout() {
            console.log('Before clearCart:', this.$store.state.cart);

            try {
                // ... your existing code

                // Dispatch the clearCart action after a successful order
                this.$store.dispatch('clearCart');
                console.log('After clearCart:', this.$store.state.cart);

                // ... your existing code
            } catch (error) {
                // ... your existing error handling
            }
        },
    },
};
</script>

<template>
    <div class="containerTnx">
            <div class="col-12 d-flex flex-column align-items-center py-5 mt-20 text-white">

                <h1>Grazie per il tuo ordine</h1>
                <p>Il nostro rider sta arrivando da te.</p>
                <!-- <div id="motorino">
                    <img src="giphy.gif" alt="Motorino">
                </div> -->
                <div id="ghost" class="position-relative">
                    <img src="tnxGhost.png" alt="Fantasmino" class="ghost">
                </div>
                <router-link :to="{ name: 'home' }">
                    <button class="btn btn-primary">
                        Torna alla homepage
                    </button>
                </router-link>
    </div>
    </div>
    
</template>

<style scoped lang="scss">
.containerTnx{
    //width: 99vw;
    height:80vh;
    background-image: url(/tnx.png); 
    // background-position: top;
    object-fit: cover;
}
.ghost {
    width: 400px;
    position: absolute;
    left: -1000px;
    //bottom: 300px;
    animation: moveGhost 5s linear infinite;
}

@keyframes moveGhost {
    0% {
        transform: translateX(-400px); /* Parte dall'esterno a sinistra */
        opacity: 1; /* Assicura che l'immagine sia visibile all'inizio dell'animazione */
    }
    100% {
        transform: translateX(2000px); /* Arriva fino al bordo destro del viewport */
        opacity: 1; /* Scompare quando raggiunge il bordo destro */
    }
}
#motorino {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 500px;
}

#motorino img {
    position: absolute;
    left: -100%;
    animation: motorinoMovimento 5s linear infinite;
}

@keyframes motorinoMovimento {
    0% {
        left: -100%;
    }

    100% {
        left: 100%;
    }
}

.w-20 {
    width: 20rem;
    margin-top: 50px;
}

.mt-20{
    margin-top: 5rem;
}
</style>
