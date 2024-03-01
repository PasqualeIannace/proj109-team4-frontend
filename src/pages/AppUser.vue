<script>
import { store } from "../store.js" //state management

export default {
    name: "AppUser",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div>
        <h1 class="text-center">Ristoranti</h1>

        <div class="container">
            <div class="row">

                <div class="col-md-4 gy-4" v-for="user in store.userList">
                    <div class="card h-100">
                        <div class="card-header">{{ user.name }}</div>
                        <div class="card-body">
                            <!-- <h5 class="card-title text-center">{{ food.name }}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">
                                {{ food.user ? food.user.name : "Utente sconosciuto" }}
                            </h6>
                            <p class="card-text">{{ food.description }}</p>
                            <p class="card-text text-center fs-5">Rimangono <b>{{ food.available_tickets }}</b> biglietti
                                disponibili.
                            </p> -->
                        </div>
                        <div class="card-footer text-center">
                            <a href="#" class="btn btn-primary">
                                <font-awesome-icon icon="fa-solid fa-circle-info" class="me-2" />
                                <span>Mostra dettagli</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>