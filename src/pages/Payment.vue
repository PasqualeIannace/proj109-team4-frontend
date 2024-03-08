<template>
    <section class="myMargin">
        <!-- Existing code ... -->

        <div class="col-lg-5">
            <div class="card bg-primary text-white rounded-0 border-0">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h5 class="mb-0">Cart details</h5>
                        <i class="bi bi-cart3 h1"></i>
                    </div>
                    <hr class="my-4">
                    <div class="d-flex justify-content-between">
                        <p class="mb-2">Subtotal</p>
                        <p class="mb-2"><i class="bi bi-currency-dollar"></i>€ {{ $store.state.cartTotal }}</p>
                    </div>
                    <div class="d-flex justify-content-between mb-4">
                        <p class="mb-2">Total</p>
                        <p class="mb-2"><i class="bi bi-currency-dollar"></i>€ {{ $store.state.cartTotal }}</p>
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
                        <div class="card-body" style="height: 350px">
                            <div class="form-group">
                                <label for="cc-number" class="control-label">CARD NUMBER</label>
                                <input id="cc-number" type="tel" class="input-lg form-control cc-number"
                                    autocomplete="cc-number" placeholder="•••• •••• •••• ••••" maxlength="19"
                                    pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" required>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="cc-exp" class="control-label">CARD EXPIRY</label>
                                        <input id="cc-exp" type="tel" class="input-lg form-control cc-exp"
                                            autocomplete="cc-exp" placeholder="•• / ••" maxlength="5"
                                            pattern="(0[1-9]|1[0-2])\/[0-9]{2}" required>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="cc-cvc" class="control-label">CARD CVC</label>
                                        <input id="cc-cvc" type="tel" class="input-lg form-control cc-cvc"
                                            autocomplete="off" placeholder="•••" maxlength="3" pattern="[0-9]{3}"
                                            required>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="cardholder-name" class="control-label">CARD HOLDER NAME</label>
                                <input type="text" class="input-lg form-control">
                            </div>
                        </div>
                    </div>


                    <!-- New form for payment details -->
                    <form @submit.prevent="handleCheckout">
                        <div v-for="(field, label) in formFields" :key="label" class="mb-3">
                            <label :for="label" class="form-label">{{ label }}</label>
                            <input v-model="formData[label]" :type="field.type" class="form-control" :id="label">
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-success btn-lg form-control" style="font-size: .8rem;">
                                MAKE PAYMENT
                            </button>
                        </div>
                        <!-- 
                        <button type="submit" class="btn btn-info btn-block btn-lg">Checkout</button> -->
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

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
                message: { type: 'text' },
                nameSurname: { type: 'text' },
                address: { type: 'text' },
                phoneNumber: { type: 'tel' },
                email: { type: 'email' },
                // Add other form fields as needed
            },
            formData: { ...defaultFormData },
            defaultFormData: { ...defaultFormData },
        };
    },

    methods: {
        async handleCheckout() {
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


    // Other methods...

};
</script>


<style scoped></style>