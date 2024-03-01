<script>
import { store } from "../store.js" //state management

export default {
    name: "EventList",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main>
        <h1 class="mt-5 mb-3 text-center">Event List</h1>

        <div class="container">
            <div class="row">

                <div class="col-md-4 gy-4" v-for="evento in store.eventList">
                    <div class="card h-100">
                        <div class="card-header">{{ evento.date }}</div>
                        <div class="card-body">
                            <h5 class="card-title text-center">{{ evento.name }}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">
                                {{ evento.user ? evento.user.name : "Utente sconosciuto" }}
                            </h6>
                            <p class="card-text">{{ evento.description }}</p>
                            <p class="card-text text-center fs-5">Rimangono <b>{{ evento.available_tickets }}</b>
                                biglietti
                                disponibili.
                            </p>
                        </div>
                        <div class="card-footer text-center">
                            <router-link :to="{ name: 'event-detail', params: { id: evento.id } }" class="btn btn-primary">
                                <font-awesome-icon icon="fa-solid fa-circle-info" class="me-2" />
                                <span>Mostra dettagli</span>
                            </router-link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>

<style scoped></style>