<template>
    <div class="row">
        <div class="col-12">
            <div class="d-flex flex-column align-items-center py-5 mt-20 text-white">

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

<style scoped lang="scss">
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

.mt-20{
    margin-top: 7rem;
}
</style>
