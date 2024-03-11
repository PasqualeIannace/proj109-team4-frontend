<script>
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import store from '../store';
import { reactive } from 'vue';
import { Store } from 'vuex';
import { toRefs } from 'vue';

export default {
    // Existing component options...

    data() {
        const defaultFormData = Object.fromEntries(
            Object.keys(this.formFields || {}).map((field) => [field, ''])
        );

        return {
            formFields: {
                Messaggio: { type: 'text', required: true },
                NomeCognome: { type: 'text', required: true },
                Indirizzo: { type: 'text', required: true },
                Numero: { type: 'tel', required: true },
                email: { type: 'email', required: true },
                // Add other form fields as needed
            },
            formData: { ...defaultFormData },
            defaultFormData: { ...defaultFormData },
        };
    },

    methods: {
        async handleCheckout() {

            if (this.$store.state.cartTotal === 0) {
                // Display an error message and prevent further execution
                toast.error('Cart is empty. Add items to your cart before proceeding to checkout.');
                return;
            }
            // Check if any required field is empty
            const emptyFields = Object.keys(this.formData).filter(field => this.formData[field].trim() === '');
            if (emptyFields.length > 0) {
                // Display an error message and prevent further execution
                toast.error('Please fill in all the required fields.');
                return;
            }
            const isCardValid = this.isCardDetailsValid();

            if (!isCardValid) {
                toast.error('Invalid card details. Please check and try again.');
                return;
            }

            try {
                // ... (existing code)
            } catch (error) {
                // ... (existing code)
            } finally {
                // ... (existing code)
            }


            try {
                const orderId = await this.createOrder();
                await this.updateFoodOrder(orderId);

                // Navigate to a thank you page
                this.$router.push({ name: 'thank-you' });

                // Display a success message to the user
                toast.success('Order placed successfully');
            } catch (error) {
                // Handle errors
                this.handleError(error);
            } finally {
                // Dispatch action to clear the cart
                await store.dispatch('clearCart');
            }
        },

        isCardDetailsValid() {
            const cardNumberInput = document.getElementById('cc-number');
            const cardExpInput = document.getElementById('cc-exp');
            const cardCvcInput = document.getElementById('cc-cvc');

            return (
                cardNumberInput.checkValidity() &&
                cardExpInput.checkValidity() &&
                cardCvcInput.checkValidity()
            );
        },

        async createOrder() {
            const paymentStatus = 'Done';

            const orderData = {
                message: this.formData.message,
                paymentStatus,
                orderDate: new Date().toISOString(),
                totalPrice: this.$store.state.cartTotal,
                nameSurname: this.formData.nameSurname,
                address: this.formData.address,
                phoneNumber: this.formData.phoneNumber,
                email: this.formData.email,
                // Add other order details
            };

            try {
                const response = await axios.post('http://localhost:8000/api/orders/create', orderData);

                console.log('createOrder response:', response.data);

                if (response.data.success) {
                    // Reset form data
                    this.formData = { ...this.defaultFormData };

                    return response.data.orderId;
                } else {
                    console.error('Error creating order:', response.data.message);
                    return null;
                }
            } catch (error) {
                // Handle errors
                this.handleError(error);
                return null;
            }
        },

        // Other methods...



        async updateFoodOrder(orderId) {
            console.log('Cart Data:', this.$store.state.cart);

            console.log('orderId:', orderId);
            for (const item of this.$store.state.cart) {
                console.log('Processing item:', item);
                const foodOrderData = {
                    foodId: item.id,
                    orderId,
                    quantity: item.qty,
                };

                console.log('foodOrderData:', foodOrderData);

                try {
                    const response = await axios.post('http://localhost:8000/api/food_order/create', foodOrderData);

                    if (response.status === 200) {
                        console.log('Food order updated successfully:', response.data);
                    } else {
                        console.error('Failed to update food order. Unexpected status code:', response.status);
                    }
                } catch (error) {
                    console.error('Error updating food order:', error);
                }

            }
        },

        handleError: (error) => {

            // Log the entire error object
            console.error(error);

            // Check if the error has a response property
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);

                // Display an error message based on the server response
                toast.error(`Failed to place the order. Server error: ${error.response.data.message}`);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received:', error.request);
                toast.error('Failed to place the order. No response received from the server.');
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error setting up the request:', error.message);
                toast.error('Failed to place the order. An unexpected error occurred.');
            }
        },
    },




    // Other methods...

};
</script>




<template>
    <section class="myMargin">
        <!-- Existing code ... -->
        <div class="col-lg-2 d-flex align-items-center" id="resi">

            <div class="col-lg-4 col-2 position-relative">
                <button type="button" class="btn btn-outline-light fs-5 position-absolute btn2"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft"
                    id="plus2">Recensioni o Rimborsi</button>
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLeft"
                    aria-labelledby="offcanvasLeftLabel">
                    <div class="offcanvas-header">
                        <h6 id="offcanvasLeftLabel">Inserisci i tuoi dati personali</h6>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <form class="row g-3 form-control d-flex">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                <label class="form-label">Nome</label>
                                <input type="text" class="form-control" aria-label="First name">
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                <label class="form-label">Cognome</label>
                                <input type="text" class="form-control" id="Second name">
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                <label for="inputEmail4" class="form-label">Email</label>
                                <div class="input-group">
                                    <div class="input-group-text">@</div>
                                    <input type="email" class="form-control" id="inputEmail4">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                <label for="inputPassword4" class="form-label">Password</label>
                                <input type="password" class="form-control" id="inputPassword4">
                            </div>

                            <div class="col-12">
                                <label for="inputAddress" class="form-label">Lascia un tuo commento</label>
                                <input type="text" class="form-control" id="inputAddress">
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                                <label for="inputCity" class="form-label">Città</label>
                                <input type="text" class="form-control" id="inputCity">
                            </div>
                            <!-- <div class="col-lg-4 col-md-4 col-sm-8 col-8">
                                <label for="inputState" class="form-label">Stato</label>
                                <select id="inputState" class="form-select">
                                    <option selected>Regioni</option>
                                    <option>Italia</option>
                                    <option>Regno Unito</option>
                                    <option>Germania</option>
                                    <option>Norvegia</option>
                                </select>
                            </div> -->
                            <div class="col-le-2 col-md-2 col-sm-4 col-4">
                                <label for="inputZip" class="form-label">Numero Ordine</label>
                                <input type="text" class="form-control" id="inputZip">
                            </div>
                            <div class="col-12">
                                <label for="formFile" class="form-label">inserisci una foto del prodotto</label>
                                <input class="form-control" type="file" id="formFile"
                                    placeholder="Nessun file selezionato">
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck">
                                    <label class="form-check-label" for="gridCheck">
                                        Ricevi newsletter
                                    </label>
                                </div>
                            </div>
                            <div class="col-3">
                                <button type="submit" class="btn btn-primary">Salva</button>
                            </div>
                            <div class="col-3">
                                <button type="submit" class="btn btn-warning">Svuota</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>


        <div class="col-lg-5 offset-4">
            <div class="card rounded-5 border-5 mb-0">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h5 class="mb-0">Cart details</h5>
                        <i class="bi bi-cart3 h1"></i>
                    </div>
                    <hr class="my-4">
                    <div class="d-flex justify-content-between">
                        <p class="mb-2">Subtotal</p>
                        <p class="mb-2"><i class="bi bi-currency-dollar"></i>€ {{ $store.state.cartTotal.toFixed(2) }}
                        </p>
                    </div>
                    <div class="d-flex justify-content-between mb-4">
                        <p class="mb-2">Total</p>
                        <p class="mb-2"><i class="bi bi-currency-dollar"></i>€ {{ $store.state.cartTotal.toFixed(2) }}
                        </p>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <div class="row">
                                <div class="col-md-6">
                                    <span>CREDIT/DEBIT CARD PAYMENT</span>
                                </div>
                                <div class="col-md-6 text-right" style="margin-top: -5px;">
                                    <img src="https://img.icons8.com/color/36/000000/visa.png">
                                    <img src="https://img.icons8.com/color/36/000000/mastercard.png">
                                    <img src="https://img.icons8.com/color/36/000000/amex.png">
                                </div>
                            </div>
                        </div>
                        <div class="card-body" style="height: 250px">
                            <div class="form-group">
                                <label for="cc-number" class="control-label">CARD NUMBER</label>
                                <input id="cc-number" type="tel" class="input-lg form-control cc-number"
                                    autocomplete="cc-number" placeholder="•••• •••• •••• ••••" maxlength="19"
                                    pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" required />
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="cc-exp" class="control-label">CARD EXPIRY</label>
                                        <input id="cc-exp" type="tel" class="input-lg form-control cc-exp"
                                            autocomplete="cc-exp" placeholder="•• / ••" maxlength="5"
                                            pattern="(0[1-9]|1[0-2])\/[0-9]{2}" required />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="cc-cvc" class="control-label">CARD CVC</label>
                                        <input id="cc-cvc" type="tel" class="input-lg form-control cc-cvc"
                                            autocomplete="off" placeholder="•••" maxlength="3" pattern="[0-9]{3}"
                                            required />
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="cardholder-name" class="control-label">CARD HOLDER NAME</label>
                                <input type="text" class="input-lg form-control" required />
                            </div>
                        </div>
                        <div class="col-lg-2 d-flex align-items-center" id="order_a">
                            <!-- <div class="col-lg-12 col-12">
                            <span class="text-white fs_5"></span>  
                        </div> -->
                            <div class="col-lg-4 col-2">
                                <button type="button" class="btn btn-outline-light fs-6 text-center"
                                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                    aria-controls="offcanvasRight" id="plus">TERMINA PAGAMENTO</button>
                                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
                                    aria-labelledby="offcanvasRightLabel">
                                    <div class="offcanvas-header">
                                        <h6 id="offcanvasRightLabel">Inserisci i tuoi dati personali</h6>
                                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body">

                                        <!-- ... (previous template code) ... -->
                                        <form @submit.prevent="handleCheckout">
                                            <div v-for="(field, label) in formFields" :key="label" class="mb-3">
                                                <label :for="label" class="form-label">{{ label }}</label>
                                                <input v-model="formData[label]" :type="field.type" class="form-control"
                                                    :id="label" :required="field.required">
                                            </div>
                                            <div class="form-group">
                                                <button type="submit" class="btn btn-lg form-control"
                                                    style="font-size: 1rem;">
                                                    TERMIINA PAGAMENTO
                                                </button>
                                            </div>
                                        </form>
                                        <!-- ... (remaining template code) ... -->

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
#offcanvasRight{
    background-image: url(/prova3.png);
}
.btn2 {
    top: 200px;
}

.btn {
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.486);
    color:azure
}
.btn:hover{
    opacity: 0.7;
  /* background: hsl(186 100% 69%); */
  border-width: 4px;
  border-color: hsl(186 100% 69%) ;
}

.card {
    background-color: rgba(0, 0, 0, 0.712);
    color: aliceblue;
}

section {
    margin-top: 100px;
    margin-bottom: 50px;
}
</style>