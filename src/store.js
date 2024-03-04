import { reactive } from 'vue'

export const store = reactive({
    apiUrl: "http://127.0.0.1:8000/api/",
    apiEndpoint: "foods",
    apiUserEndpoint: "users",
    apiFoodsByUserEndpoint: "foods/user/${userId}",

    foodList: [],
    userList: [],
    searched: encodeURI(""),
    foodListByUser: [],
});