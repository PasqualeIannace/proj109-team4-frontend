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
                    toast.success('Prodotto aggiunto al carrello')
                }else{
                    toast.warning('Hai raggiunto il limite')
                }
            }
            if( number == -1 ){
                if(this.qty > 1){ //remove
                    this.qty--
                    this.food.qty = this.qty
                    await this.$store.commit('updateCart',{food:this.food})
                    toast.success('Prodotto rimosso al carrello');
                }else{
                    toast.warning('La quantità minima è 1');
                }
            }
            this.loading = false
        }
    },
    mounted() {
    if (this.food && this.food.qty) {
        this.qty = this.food.qty;
    }
}
}
</script>

<template>
    <div v-if="food" class="input-group plus-minus">
        <button class="btn btn-outline-secondary"  :class="loading?'disabled':''" @click="$event => addOrRemove(-1)" type="button" id="button-addon1">-</button>
        <input type="number" v-model="qty" disabled class="form-control form-control-sm inputCart" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
        <button class="btn btn-outline-secondary" :class="loading?'disabled':''" @click="$event => addOrRemove(1)" type="button" id="button-addon1">+</button>
    </div>
</template>

<style scoped>
.input-group {
    width: 9em;
}

.form-control {
    flex: none;
    width: 33%;
}

.inputCart{
    background-color: rgba(0, 0, 0, 0.454);
    color: blueviolet;
}
</style>