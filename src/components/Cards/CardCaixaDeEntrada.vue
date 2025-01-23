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
  width: 100%;
  height: 100%;
}
</style>
