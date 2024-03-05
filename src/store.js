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
    types:[],
    selectedTypes: [],
    //searched: encodeURI(""),
    foodListByUser: [],
});

export default createStore({
    state: {
        cart: JSON.parse(localStorage.getItem('cart')) || [], // Inizializza con il carrello dal localStorage
        cartTotal: JSON.parse(localStorage.getItem('cartTotal')) || 0, // Inizializza con il totale dal localStorage
        types: [],
    },
    mutations: {
        addRemoveCart(state, payload) {
            // Logica per aggiungere/rimuovere dal carrello
            // Aggiorna lo stato del carrello
            state.cart = payload.toAdd ?
                [...state.cart, payload.food] :
                state.cart.filter(obj => obj.id !== payload.food.id);
            // Aggiorna il totale del carrello
            state.cartTotal = state.cart.reduce((accumulator, object) => {
                return parseFloat(accumulator) + parseFloat(object.price * object.qty);
            }, 0);
            // Aggiorna il localStorage
            localStorage.setItem('cartTotal', JSON.stringify(state.cartTotal));
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        updateCart(state, payload) {
            // Logica per aggiornare il carrello
            // Aggiorna lo stato del carrello
            state.cart.find(o => o.id === payload.food.id).qty = payload.food.qty;
            // Aggiorna il totale del carrello
            state.cartTotal = state.cart.reduce((accumulator, object) => {
                return parseFloat(accumulator) + parseFloat(object.price * object.qty);
            }, 0);
            // Aggiorna il localStorage
            localStorage.setItem('cartTotal', JSON.stringify(state.cartTotal));
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
    },

    actions: {
        // Agg un'azione per caricare i tipi dal backend
        // async fetchTypes({ commit, state }) {
        //     try {
        //         const response = await fetch(state.apiUrl + state.apiTypesEndpoint);
        //         const data = await response.json();
        //         commit('setTypes', data);
        //     } catch (error) {
        //         console.error('Errore durante il recupero dei tipi:', error);
        //     }
        // },
    },
    modules: {},
})