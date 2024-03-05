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
    //selectedTypes: [],
    //searched: encodeURI(""),
    foodListByUser: [],
});

export default createStore({
    state: {
        cart: [],
        cartTotal: 0,
        types: [],
    },
    mutations: {
        addRemoveCart(state, payload) {
            payload.toAdd ?
                state.cart.push(payload.food) :
                state.cart = state.cart.filter(function (obj) {
                    return obj.id !== payload.food.id
                })
            state.cartTotal = state.cart.reduce((accumulator, object) => {
                return parseFloat(accumulator) + parseFloat(object.price * object.qty);
            }, 0);
            localStorage.setItem('cartTotal', JSON.stringify(state.cartTotal));
            localStorage.setItem('cart', JSON.stringify(state.cart));

            console.log(state.cartTotal)
            console.log(state.cart)
        },
        updateCart(state, payload) {
            state.cart.find(o => o.id === payload.food.id).qty = payload.food.qty;
            state.cartTotal = state.cart.reduce((accumulator, object) => {
                return parseFloat(accumulator) + parseFloat(object.price * object.qty);
            }, 0);
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