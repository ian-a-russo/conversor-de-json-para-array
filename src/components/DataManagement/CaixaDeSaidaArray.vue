<template>
  <v-container fluid>
    <v-textarea
      rows="28"
      :readonly="true"
      :value="array"
      no-resize
    ></v-textarea>
    <div class="d-flex justify-space-evenly">
      <v-btn
        color="secondary"
        height="5rem"
        width="15rem"
        @click="store.lowerJson()"
        >LowerCase</v-btn
      >
      <v-btn
        color="cyan"
        height="5rem"
        width="15rem"
        @click="store.jsonToArray()"
        >Normal</v-btn
      >
      <v-btn
        color="primary"
        height="5rem"
        width="15rem"
        @click="store.upperJson()"
        >UpperCase</v-btn
      >
      <v-btn height="5rem" width="7rem" class="copy" @click="copy">
        <v-icon>mdi-content-copy</v-icon></v-btn
      >
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { TypeAlert, useAlertStore, useJsonStore } from "@/store";
import { computed } from "vue";

const alertStore = useAlertStore();

const textToCopy = computed(() => store.formattedJson);

async function copy() {
  await navigator.clipboard.writeText(`[\n${textToCopy.value.toString()}]`);

  alertStore.callAlert(TypeAlert.success, "Copiado com sucesso!");
}

const store = useJsonStore();

let array = computed(() => store.getformattedJson);
</script>
