<script>
import CartAddRemove from '../components/CartAddRemove.vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    components: { CartAddRemove },
    methods: {
        removeItem(food) {
            this.$store.commit('addRemoveCart', { food, toAdd: false });
        },

        // TASTO INDIETRO
        goBack() {
        this.$router.go(-1);
        },

        removeAllItems() {
            if (this.$store.state.cart.length > 0) {
                this.$store.state.cart.forEach((food) => {
                    if (food.userId === this.$store.state.selectedUserId) {
                        this.$store.commit('addRemoveCart', { food, toAdd: false });
                    }
                });
                toast.success('All items removed from the cart');
            } else {
                toast.warning('The cart is already empty');
            }
        },
    },
};
</script>

<template>
    <section class="myMargin">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col">
                    <div class="card border-0">
                        <div class="card-body p-4">
                            <div class="row">
                                <div class="col-lg-7">
                                    <h5 class="mb-3">
                                        <a @click="goBack" class="text-body" style="cursor: pointer;">
                                            <i class="fas fa-long-arrow-alt-left me-2"></i>Continua lo shopping
                                        </a>
                                    </h5>
                                    <hr>
                                    <div class="d-flex justify-content-between align-items-center mb-4">
                                        <div>
                                            <p class="mb-0">Hai {{ $store.state.cart.length }} prodotti nel carrello
                                            </p>
                                        </div>
                                        <div>
                                            <button @click="removeAllItems" class="btn btn-danger">Remove All</button>
                                        </div>
                                    </div>
                                    <div v-for="food in $store.state.cart" class="card mb-3 shadow-sm border-0"
                                        :key="food.id">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between">
                                                <div class="d-flex flex-row align-items-center">
                                                    <div>
                                                        <img :src="food.image" class="img-fluid rounded-3"
                                                            alt="Shopping item" style="width: 65px;">
                                                    </div>
                                                    <div class="ms-3">
                                                        <p>{{ food.name }}</p>
                                                    </div>
                                                </div>
                                                <div class="d-flex flex-row align-items-center">
                                                    <div>
                                                        <CartAddRemove :food="food" />
                                                    </div>
                                                </div>
                                                <div class="d-flex flex-row align-items-center">
                                                    <div>
                                                        <h5 class="mb-0"><i class="bi bi-currency-dollar"></i>€ {{
                                            food.price * food.qty }}</h5>
                                                        <small v-if="food.hasDiscount"
                                                            class="text-muted text-decoration-line-through">
                                                            <i class="bi bi-currency-dollar"></i>
                                                        </small>
                                                    </div>
                                                    <a role="button" @click="$event => removeItem(food)" class="ms-4"
                                                        style="color: red;">
                                                        <i class="fas fa-trash-alt"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-5">
                                    <div class="card bg-primary text-white rounded-0 border-0">
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between align-items-center mb-4">
                                                <h5 class="mb-0">Cart details</h5>
                                                <i class="bi bi-cart3 h1"></i>
                                            </div>
                                            <hr class="my-4">
                                            <div class="d-flex justify-content-between">
                                                <p class="mb-2">Subtotal</p>
                                                <p class="mb-2"><i class="bi bi-currency-dollar"></i>€ {{
                                            $store.state.cartTotal }}</p>
                                            </div>
                                            <div class="d-flex justify-content-between mb-4">
                                                <p class="mb-2">Total</p>
                                                <p class="mb-2"><i class="bi bi-currency-dollar"></i>€ {{
                                                    $store.state.cartTotal }}</p>
                                            </div>
                                            <button type="button" class="btn btn-info btn-block btn-lg">
                                                Checkout
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>



<style scoped>
/* Add your styles if needed */
</style>