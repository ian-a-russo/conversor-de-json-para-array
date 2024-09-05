<template>
  <v-container fluid>
    <v-textarea :readonly="true" :value="array" no-resize></v-textarea>
    <v-container class="buttons">
      <v-btn class="mx-2" color="secondary" @click="lowerCaseJson()"
        >LowerCase</v-btn
      >
      <v-btn class="mx-2" color="cyan" @click="normalJson()">Normal</v-btn>
      <v-btn class="mx-2" color="primary" @click="upperCaseJson()"
        >UpperCase</v-btn
      >
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import { useJsonStore } from "@/store";
import { computed } from "vue";

const store = useJsonStore();

let array = computed(() => store.getJsonConvertido);

console.log(array.value);

function lowerCaseJson() {
  store.lowerJson();
}

function upperCaseJson() {
  store.upperJson();
}

function normalJson() {
  store.jsonParaArray();
}
</script>

<style scoped>
.buttons {
  display: flex;
  justify-content: center;
  margin: -1.8rem 0 0 0;
}

.v-textarea {
  height: 11rem;
}

@media (max-width: 1450px) {
  .v-btn {
    width: 6.5rem;
    height: 1.8rem;
    margin-top: -0.4rem;
  }
}
</style>
