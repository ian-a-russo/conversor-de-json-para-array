<template>
  <v-main>
    <AlertsJSON />
    <CardCaixaDeEntrada />
    <CardCaixaDeSaida />
  </v-main>
</template>

<script setup lang="ts">
import AlertsJSON from "./Notifications/AlertsJSON.vue";
import CardCaixaDeEntrada from "./Cards/CardCaixaDeEntrada.vue";
import CardCaixaDeSaida from "./Cards/CardCaixaDeSaida.vue";
</script>

<style scoped>
.v-main {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10rem 3rem 10rem;
}

@media (max-width: 1450px) {
  .v-main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 0 0;
  }
}
</style>
