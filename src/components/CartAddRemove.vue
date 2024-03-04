<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    name: "CartAddRemove",
    props:['food'],
    data() {
        return {
            qty:1,
            loading:false
        }
    },
    methods: {
        async addOrRemove(number) {
            this.loading = true
            if(number == 1){ //add
                if(this.qty < 10){
                    this.qty++
                    this.food.qty = this.qty
                    await this.$store.commit('updateCart',{food:this.food})
                    toast.success('cart updated')
                }else{
                    toast.warning('You reached the limit')
                }
            }
            if( number == -1 ){
                if(this.qty > 1){ //remove
                    this.qty--
                    this.food.qty = this.qty
                    await this.$store.commit('updateCart',{food:this.food})
                    toast.success('cart updated');
                }else{
                    toast.warning('You reached the limit');
                }
            }
            this.loading = false
        }
    },
    mounted(){
        this.qty = this.food
    }
}
</script>

<template>
    <div v-if="food" class="input-group plus-minus">
        <button class="btn btn-outline-secondary" :class="loading?'disabled':''" @click="$event => addOrRemove(-1)" type="button" id="button-addon1">-</button>
        <input type="number" v-model="qty" disabled class="form-control form-control-sm" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
        <button class="btn btn-outline-secondary" :class="loading?'disabled':''" @click="$event => addOrRemove(1)" type="button" id="button-addon1">+</button>
    </div>
</template>

<style scoped></style>