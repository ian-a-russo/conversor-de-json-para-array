<template>
  <v-main class="d-flex justify-space-evenly">
    <AlertsJSON />
    <v-row class="v-col-card">
      <v-col cols="12" md="6" class="d-flex justify-center align-center pa-6">
        <CardCaixaDeEntrada />
      </v-col>
      <v-col cols="12" md="6" class="d-flex justify-center align-center pa-6"
        ><CardCaixaDeSaida
      /></v-col>
    </v-row>
  </v-main>
</template>

<script setup lang="ts">
import AlertsJSON from "./Notifications/AlertsJSON.vue";
import CardCaixaDeEntrada from "./Cards/CardCaixaDeEntrada.vue";
import CardCaixaDeSaida from "./Cards/CardCaixaDeSaida.vue";
</script>

<style scoped>
.v-col-card {
  height: 100vh;
}
</style>
