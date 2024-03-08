<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8 text-center">
                <h1 class="display-4">Grazie Mille!</h1>
                <p class="lead">Thank you for your order. Your transaction was successful.</p>
                <button class="btn btn-primary" @click="goBack">Go Back to Restaurants</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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

<style scoped>
/* Add custom styles if needed */
</style>