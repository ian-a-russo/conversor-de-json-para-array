<template>
  <v-container fluid>
    <v-textarea label="JSON" v-model="jsonContent" no-resize></v-textarea>
    <v-btn @click="pesquisar(jsonContent)" color="primary">
      Converter
      <v-icon icon="mdi-checkbox-marked-circle" end></v-icon>
    </v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { verifyJSON } from "@/api/verifyJson";
import { useJsonStore, useAlertStore } from "@/store";
import { ref } from "vue";

const store = useJsonStore();
const alertStore = useAlertStore();

const jsonContent = ref("");

function pesquisar(content: string) {
  const jsonAproved = verifyJSON(content);

  if (jsonAproved) {
    store.setJson(content);
    store.jsonParaArray();
    alertStore.setSuccessAlert();
    return;
  }
  if (jsonAproved === false && content) {
    alertStore.setErrorAlert();
    return;
  }

  alertStore.setWarningAlert();
  return;
}
</script>

<style scoped>
.v-btn {
  margin-top: -0.8rem;
  left: 14rem;
}
</style>
