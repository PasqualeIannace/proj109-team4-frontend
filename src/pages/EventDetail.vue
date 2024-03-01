<script>

export default {
    name: "EventDetail",
    props: ["id"]
}
</script>

<template>
    <div class="container">
        <div class="row">
            <!-- <h1 class="mt-5 mb-3 text-center">Dettaglio evento {{ $route.params.id }}</h1> -->
            <h1 class="mt-5 mb-3 text-center">Dettaglio evento {{ id }}</h1>
        </div>
    </div>
</template>

<style scoped></style>