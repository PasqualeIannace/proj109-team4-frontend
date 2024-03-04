<script>
import CartAddRemove from './CartAddRemove.vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    name: "CartBTN",
    props:['food'],
    components:{ CartAddRemove },
    data() {
        return {
            toAdd:true,
            item:[]
        }
    },
    methods: {
        async addOrRemove() {
            this.item.qty = 1
            this.$store.commit('addRemoveCart',{food:this.item, toAdd:this.toAdd})
            let toastMSG
            this.toAdd? toastMSG = 'Added to cart' : toastMSG = 'Removed from cart'
            toast(toastMSG, {
                autoClose: 1000,
            });
            this.toAdd = !this.toAdd
        }
    },
    mounted(){
        let cart = this.$store.state.cart
        let obj = cart.find(o => o.id === this.food.id)
        if(obj){
            this.toAdd = false
            this.item = obj
        }else{
            this.item = this.food
            this.toAdd = true
        }
    }
}
</script>

<template>
        <button type="button" @click="$event => addOrRemove()" class="btn btn-sm me-2">
        <i class="fa-solid fa-cart-shopping"></i>
        </button>
        <CartAddRemove v-if="!toAdd" :food="item"/>
</template>

<style scoped></style>