<template>
  <v-alert
    v-if="success"
    text="O JSON foi convertido com sucesso!"
    title="Sucesso"
    type="success"
  ></v-alert>

  <v-alert
    v-if="successCopy"
    text="Copiado com sucesso!"
    title="Sucesso"
    type="success"
  ></v-alert>

  <v-alert
    v-if="warning"
    text="O campo JSON não pode ser vazio!"
    title="Aviso"
    type="warning"
  ></v-alert>

  <v-alert
    v-if="error"
    text="O JSON inserido está no formato inválido!"
    title="Erro"
    type="error"
  ></v-alert>
</template>

<script setup lang="ts">
import { useAlertStore } from "@/store/alertStore";
import { computed } from "vue";

const store = useAlertStore();
const success = computed(() => store.getSuccessAlert);
const successCopy = computed(() => store.getSuccessCopyAlert);
const error = computed(() => store.getErrorAlert);
const warning = computed(() => store.getWarningAlert);
</script>

<style scoped>
.v-alert {
  position: absolute;
  top: 0;
  left: 0;
  margin: 1.5rem 0 0 1.5rem;
  width: 24rem;
  z-index: 1000;
}
</style>
