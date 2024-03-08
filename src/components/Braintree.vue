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
    <h2>Modulo di Pagamento</h2>
    <div class="container-sm mt-4 bg-opacity-50 bg-black text-light">
        <div class="row g-3">
            <form @submit.prevent="effettuaPagamento">
            <div class="col-md-6">
                <label for="name" class="form-label text-white">Numero Carta di Credito:</label>
                <input type="text" class="form-control" id="numeroCarta" v-model="numeroCarta">
            </div>

            <div class="col-md-6">
                <label for="price" class="form-label">Scadenza Carta</label>
                <input type="number" class="form-control" id="scadenzaCarta" v-model="scadenzaCarta">
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
    </div>
                
                <div class="row mt-4">
                    <div class="col-md-6">
                        <label for="ingredients" class="form-label">Ingredienti *</label>
                        <input type="text" class="form-control @error('ingredients') is-invalid @enderror"
                            id="ingredients" name="ingredients" value="{{ old('ingredients') ?? $editFood->ingredients }} ">
                        @error('ingredients')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>
                    
                        </div>

</template>