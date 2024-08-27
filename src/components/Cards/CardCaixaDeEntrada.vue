<script setup lang="ts">
import CaixaDeEntradaJson from "../DataManagement/CaixaDeEntradaJson.vue";
</script>

<template>
  <v-card
    class="mx-auto"
    prepend-icon="mdi-arrow-up-bold-box-outline"
    subtitle="Insira seu texto ou arquivo JSON aqui"
    width="400"
    height="300"
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
}

.v-file-input {
  position: absolute;
  width: 80%;
  margin: -2.9rem 0 0 1rem;
}
</style>
