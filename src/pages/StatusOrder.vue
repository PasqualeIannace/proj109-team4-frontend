<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "StatusOrder",
    components: {
    },
    data() {
        return {
            store,
        }
    },
    methods: {
    },
}
</script>

<template>
    <div class="row">
        <div class="col-12">
            <div class="d-flex flex-column align-items-center py-5">

                <h1>Grazie per il tuo ordine</h1>
                <p>Il nostro rider sta arrivando da te.</p>
                <div id="motorino">
                    <img src="giphy.gif" alt="Motorino">
                </div>
                <router-link :to="{ name: 'home' }">
                    <button class="btn btn-primary">
                        Torna alla homepage
                    </button>
                </router-link>

            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
#motorino {
    position: relative;
    overflow: hidden;
    width: 100%;
    // Modifica la larghezza in base alle dimensioni della tua GIF /
    height: 500px;
    // Imposta un'altezza appropriata /
}

#motorino img {
    position: absolute;
    left: -100%;
    // Inizia fuori dallo schermo a sinistra /
    animation: motorinoMovimento 5s linear infinite;
    // Modifica la durata e la velocità secondo necessità /
}

@keyframes motorinoMovimento {
    0% {
        left: -100%;
        // Inizia fuori dallo schermo a sinistra /
    }

    100% {
        left: 100%;
        // Finisce fuori dallo schermo a destra */
    }
}
</style>
