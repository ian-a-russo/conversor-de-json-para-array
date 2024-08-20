<template>
  <v-main>
    <CardCaixaDeEntrada />
    <CardCaixaDeSaida />
  </v-main>
</template>

<script setup lang="ts">
import CardCaixaDeEntrada from "./CardCaixaDeEntrada.vue";
import CardCaixaDeSaida from "./CardCaixaDeSaida.vue";
</script>

<style scoped>
.v-main {
  display: flex;
  align-items: center;
  margin: 0 10rem 3rem 10rem;
}
</style>
