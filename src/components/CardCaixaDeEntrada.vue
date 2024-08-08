<script setup lang="ts">
import CaixaDeEntradaJson from "./CaixaDeEntradaJson.vue";
</script>

<template>
  <v-card
    class="mx-auto"
    prepend-icon="mdi-arrow-up-bold-box-outline"
    subtitle="Insira seu texto ou arquivo JSON aqui"
    width="400"
  >
    <CaixaDeEntradaJson />
    <template v-slot:title>
      <span class="font-weight-black">JSON</span>
    </template>
  </v-card>
</template>
