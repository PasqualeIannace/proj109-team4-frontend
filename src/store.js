import { reactive } from 'vue'
import { createStore } from 'vuex'

export const store = reactive({
    apiUrl: "http://127.0.0.1:8000/api/",
    apiEndpoint: "foods",
    apiUserEndpoint: "users",
    apiFoodsByUserEndpoint: "foods/user/${userId}",
    apiTypesEndpoint: "restaurant_types",
    foodList: [],
    userList: [],
    types: [],
    selectedTypes: [],
    //searched: encodeURI(""),
    foodListByUser: [],
});

export default createStore({
    state: reactive({
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        cartTotal: JSON.parse(localStorage.getItem('cartTotal')) || 0,
        types: [],
    }),
    mutations: {
        addRemoveCart(state, payload) {
            // Logica per aggiungere/rimuovere dal carrello
            state.cart = payload.toAdd ?
                [...state.cart, payload.food] :
                state.cart.filter(obj => obj.id !== payload.food.id);
            state.cartTotal = state.cart.reduce((accumulator, object) => {
                return parseFloat(accumulator) + parseFloat(object.price * object.qty);
            }, 0);
            localStorage.setItem('cartTotal', JSON.stringify(state.cartTotal));
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        updateCart(state, payload) {
            // Logica per aggiornare il carrello
            state.cart.find(o => o.id === payload.food.id).qty = payload.food.qty;
            state.cartTotal = state.cart.reduce((accumulator, object) => {
                return parseFloat(accumulator) + parseFloat(object.price * object.qty);
            }, 0);
            localStorage.setItem('cartTotal', JSON.stringify(state.cartTotal));
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        // mutations section in store.js
        clearCart(state) {
            console.log('Clearing the cart'); // Add this line
            state.cart = [];
            state.cartTotal = 0;
            localStorage.removeItem('cartTotal');
            localStorage.removeItem('cart');
        },

    },

    actions: {
        // Add other actions as needed

        clearCart({ commit }) {
            commit('clearCart');
        },
    },
    modules: {},
});
