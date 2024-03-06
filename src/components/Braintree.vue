<script>
import axios from 'axios';

export default {
  data() {
    return {
      numeroCarta: '',
      scadenzaCarta: '',
      cvv: ''
    };
  },
  methods: {
    async effettuaPagamento() {
      try {
        const response = await axios.post('/api/pagamenti', {
          numeroCarta: this.numeroCarta,
          scadenzaCarta: this.scadenzaCarta,
          cvv: this.cvv
        });
        console.log(response.data);
        // Gestisci la risposta dal backend (es. conferma pagamento)
      } catch (error) {
        console.error('Errore durante l\'effettuazione del pagamento:', error);
      }
    }
  }
};
</script>

<template>
  <div>
    <h2>Modulo di Pagamento</h2>
    <form @submit.prevent="effettuaPagamento">
      <div>
        <label for="numeroCarta">Numero Carta di Credito:</label>
        <input type="text" id="numeroCarta" v-model="numeroCarta">
      </div>
      <div>
        <label for="scadenzaCarta">Scadenza Carta di Credito:</label>
        <input type="text" id="scadenzaCarta" v-model="scadenzaCarta">
      </div>
      <div>
        <label for="cvv">CVV:</label>
        <input type="text" id="cvv" v-model="cvv">
      </div>
      <div>
        <button type="submit">Effettua Pagamento</button>
      </div>
    </form>
  </div>
</template>