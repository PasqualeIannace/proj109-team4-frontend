<script>
import CartAddRemove from './CartAddRemove.vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    name: "CartBTN",
    props: ['food'],
    components: { CartAddRemove },
    data() {
        return {
            toAdd: true,
            item: []
        }
    },
    methods: {
        async addOrRemove() {
            // Verifica se il carrello è vuoto
            if (this.$store.state.cart.length === 0) {
                // Se il carrello è vuoto, aggiungi direttamente l'elemento al carrello
                this.item.qty = 1;
                this.$store.commit('addRemoveCart', { food: this.item, toAdd: this.toAdd });
                let toastMSG = this.toAdd ? 'Nuovo prodotto aggiunto' : 'Prodotto rimosso';
                toast(toastMSG, {
                    autoClose: 1000,
                });
                this.toAdd = !this.toAdd;
            } else {
                // Se il carrello non è vuoto, controlla se l'elemento da aggiungere ha lo stesso user_id di un elemento già presente nel carrello
                let cartItem = this.$store.state.cart.find(item => item.user_id !== this.item.user_id);
                if (cartItem) {
                    // Se l'elemento ha un user_id diverso da quelli presenti nel carrello, mostra un messaggio di errore o gestisci l'aggiunta di conseguenza
                    toast('Non è possibile aggiungere elementi da ristoratori diversi', {
                        autoClose: 2000,
                        type: 'error'
                    });
                } else {
                    // Se l'elemento ha lo stesso user_id degli elementi presenti nel carrello, aggiungilo normalmente
                    this.item.qty = 1;
                    this.$store.commit('addRemoveCart', { food: this.item, toAdd: this.toAdd });
                    let toastMSG = this.toAdd ? 'Nuovo prodotto aggiunto' : 'Prodotto rimosso';
                    toast(toastMSG, {
                        autoClose: 1000,
                    });
                    this.toAdd = !this.toAdd;
                }
            }
        },

    },
    mounted() {
        let cart = this.$store.state.cart
        let obj = cart.find(o => o.id === this.food.id)
        if (obj) {
            this.toAdd = false
            this.item = obj
        } else {
            this.item = this.food
            this.toAdd = true
        }
    }
}
</script>

<template>
    <button type="button" @click="addOrRemove" class="btn me-2 text-white">
        <i class="fa-solid fa-cart-shopping"></i>
        <span class="ps-2" v-if="toAdd">Aggiungi al carrello</span>
    </button>
    <CartAddRemove v-if="!toAdd" :food="item" />
</template>

<style scoped>
.my-cart {
    color: white;
}

button {
    &:hover {

        i, span {
            transition: 300ms;
            color: #FC3966 !important;
        }
    }
}
</style>