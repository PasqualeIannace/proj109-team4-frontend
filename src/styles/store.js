import { reactive } from 'vue'

export const store = reactive({
    apiUrl : "http://127.0.0.1:8000/api/",
    apiEndPoint : "foods",
    apiUserEndpoint: "users",
    apiTypesEndpoint: "restaurant_types",
    foodList : [],
    userList:[],
    types:[],
    searched: encodeURI(""),
});