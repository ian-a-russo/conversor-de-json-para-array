<template>
  <v-container fluid>
    <v-textarea label="JSON" v-model="jsonContent"></v-textarea>
    <v-btn @click="pesquisar(jsonContent)" color="primary">
      Converter
      <v-icon icon="mdi-checkbox-marked-circle" end></v-icon>
    </v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { useJsonStore } from "@/store";
import { ref } from "vue";

const store = useJsonStore();

const jsonContent = ref("");

function pesquisar(content: string) {
  store.fetchJson(content);
  store.converterChavesJSONParaArray();
  console.log(store.getJsonConvertido);
}
</script>

<style scoped>
.v-btn {
  margin-top: -0.8rem;
  left: 14rem;
}
</style>
