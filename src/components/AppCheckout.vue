<script>
import { store } from "../store.js";
import axios from 'axios';

import AppCreditCard from "./AppCreditCard.vue";

export default {
  name: "AppCheckout",
  components: {
    AppCreditCard
  },
  data() {
    return {
      store,
      orderData: {
        customer_name: '',
        customer_surname: '',
        customer_address: '',
        customer_number: '',
        total_order: '',
        state_payment: 1,
        products: [],
      },
    }
  },
  methods: {
    async submitOrder() {
      try {

        const productsData = this.store.cartItems.map(item => {
          return { id: item.id, quantity: item.quantity };
        });


        this.orderData.products = productsData;

        const response = await axios.post(this.store.apiUrl + this.store.apiOrders, this.orderData);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
      this.$router.push({ name: 'statusorder' })
      this.emptyCart();
    },
    emptyCart() {
      if (this.store.cartItems.length > 0) {
        this.store.cartItems = [];
        localStorage.clear();
      }
    },
    calculateTotal() {
      let total = 0;
      this.store.cartItems.forEach(item => {
        total += item.price * item.quantity;
      });
      this.orderData.total_order = total;
      return total;
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <h1>Riepilogo ordine</h1>

        <div class="container">
          <div class="row">
            <div class="col-12 mt-2">
              <table class="table table-stripied">
                <thead>
                  <tr>
                    <th scope="col">Nome prodotto</th>
                    <th scope="col">Prezzo</th>
                    <th scope="col">Quantità</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in this.store.cartItems">
                    <td>
                      {{ item.name }}
                    </td>
                    <td>
                      {{ item.price }}€
                    </td>
                    <td>
                      {{ item.quantity }}
                    </td>
                  </tr>
                  <tr>
                    <td>Totale</td>
                    <td>{{ calculateTotal() }}€</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" row">
      <div class="col-8">
        <h1>Inserisci i dati di pagamento</h1>
        <form @submit.prevent="submitOrder" method="POST">

          <div class="mb-3">
            <label for="customer_name" class="form-label">Nome</label>
            <input v-model="orderData.customer_name" type="text" class="form-control" id="customer_name">
          </div>

          <div class="mb-3">
            <label for="customer_surname" class="form-label">Cognome</label>
            <input v-model="orderData.customer_surname" type="text" class="form-control" id="customer_surname">
          </div>

          <div class="mb-3">
            <label for="customer_address" class="form-label">Indirizzo del cliente</label>
            <input v-model="orderData.customer_address" type="text" class="form-control" id="customer_address">
          </div>

          <div class="mb-3">
            <label for="customer_number" class="form-label">Telefono del cliente</label>
            <input v-model="orderData.customer_number" type="text" class="form-control" id="customer_number">
          </div>


          <AppCreditCard />
          <button type="submit" class="btn btn-primary">
            INVIA
          </button>

        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>