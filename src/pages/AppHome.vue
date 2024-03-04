<script>
import CartBTN from '../components/CartBTN.vue'
import { store } from "../store.js"; //state management
export default {
    name: "AppHome",

    components:{CartBTN},
    data(){
        return{
            store
        }
    },
    
    mounted() {
        
    }
}

</script>

<template>
    <div class="container min-h-content py-5 text-center">
        <div class="row py-lg-5">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col" v-for="food in store.foodList" :key="food.id">
                    <div class="card shadow-sm">
                        <img class="bd-placeholder-img card-img-top" width="100%" :src="food.image" alt="">
                        <div class="card-body">
                            <p class="card-text">{{ food.name }}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <CartBTN :food="food"/>
                                </div>
                                <small class="text-muted"><i class="bi bi-currency-dollar"></i>{{ food.price }}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>