<script>
import CartAddRemove from '../components/CartAddRemove.vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    components: {
        CartAddRemove,
    },
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
        <div class="container py-5 my-height">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col">
                    <div class="card border-0">
                        <div class="card-body p-4">
                            <div class="row">
                                <div class="col-lg-7">
                                    <h5 class="mb-3 go-back">
                                        <a @click="goBack" class="" style="cursor: pointer;">
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
                                            <button @click="removeAllItems" class="btn btn-danger">Svuota il carrello</button>
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
                                                        <p style="width: 13rem;">{{ food.name }}</p>
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
                                    <div class="card text-white rounded-0 border-0 checkout-card no-bg">
                                        <div class="card-body">
                                            <div class="text-white rounded-0 border-0 no-bg">
                                                <div class="card-body bg-pesca">
                                                    <div class="d-flex justify-content-between align-items-center mb-4">
                                                        <h5 class="mb-0">Carrello</h5>
                                                        <i class="bi bi-cart3 h1"></i>
                                                    </div>
                                                    <hr class="my-4">
                                                    <div class="d-flex justify-content-between">
                                                    <p class="mb-2">Spedizione</p>
                                                    <p class="mb-2">Gratuita</p>
                                                    </div>
                                                    <div class="d-flex justify-content-between mb-4">
                                                        <p class="mb-2">Totale</p>
                                                        <p class="mb-2"><i class="bi bi-currency-dollar"></i>€ {{ $store.state.cartTotal.toFixed(2) }}</p>
                                                    </div>
                                                    <router-link :to="{ name: 'payment' }">
                                                        <button type="button" class="btn btn-info btn-block btn-lg my-btn">
                                                        Paga
                                                        </button>
                                                    </router-link>
                                                </div>
                                            </div>
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
.my-btn {
    background: white;
    border: none;
    color: #140934;
    border-radius: 2em;

    &:hover {
        /* transition: 300ms; */
        /* color: white;
        background-color: #140934; */
        /* background-color: #FD5933; */
        border: 3px solid #140934;
        /* border: 2px solid white; */
    }
}

.no-bg {
    background: none !important;
}

.go-back {

    a {
        text-decoration: none;
        color: white;
    }

    &:hover a {
        transition: 400ms;
        color: #FC3966;
    }
}

.my-height {
    min-height: 70.7vh;
}

.checkout-card {
    background-color: rgb(175, 124, 209);
    margin-top: 2.5rem;
}

.card {
    background-color: #000000a6;
    color: white;
    border-radius: 2em;
}

.bg-pesca {
    background-color: #FC3966;
    border-radius: 2em;

    div {
        border-radius: 2em;
    }
}
</style>./Payment.vue