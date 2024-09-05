<script setup lang="ts">
import CaixaDeEntradaJson from "../DataManagement/CaixaDeEntradaJson.vue";
</script>

<template>
  <v-card
    prepend-icon="mdi-arrow-up-bold-box-outline"
    subtitle="Insira seu texto ou arquivo JSON aqui"
  >
    <CaixaDeEntradaJson />
    <template v-slot:title>
      <span class="font-weight-black">JSON</span>
    </template>
  </v-card>
</template>

<style scoped>
.v-card {
  position: relative;
  width: 25rem;
  height: 18.8rem;
}

@media (max-width: 1450px) {
  .v-card {
    width: 22.8rem;
    height: 17.8rem;
    margin-left: 0rem;
    margin-top: -25rem;
    position: absolute;
  }
}
</style>
