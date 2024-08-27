<template>
  <v-container fluid>
    <v-textarea :readonly="true" :value="array">{{ array }}</v-textarea>
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
</style>
