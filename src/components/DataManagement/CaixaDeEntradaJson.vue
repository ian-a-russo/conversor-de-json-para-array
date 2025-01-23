<template>
  <v-container fluid>
    <v-textarea
      rows="28"
      label="JSON"
      v-model="jsonContent"
      no-resize
    ></v-textarea>
    <div class="d-flex justify-space-evenly my-3">
      <v-btn
        height="5rem"
        width="15rem"
        class="beatiful-json"
        @click="beatifulJson(jsonContent)"
        color="secondary"
      >
        Beautiful JSON
        <v-icon icon="mdi-checkbox-marked-circle" end></v-icon>
      </v-btn>
      <v-btn
        height="5rem"
        width="15rem"
        @click="format(jsonContent)"
        color="primary"
      >
        Converter
        <v-icon icon="mdi-checkbox-marked-circle" end></v-icon>
      </v-btn>
      <v-btn height="5rem" width="7rem" class="copy" @click="copy">
        <v-icon>mdi-content-copy</v-icon></v-btn
      >
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { JsonValidation } from "@/api/verifyJson";
import { ref } from "vue";
import { TypeAlert, useAlertStore, useJsonStore } from "@/store";
import { computed } from "vue";

const alertStore = useAlertStore();

const textToCopy = computed(() => store.getJson);

async function copy() {
  await navigator.clipboard.writeText(textToCopy.value.toString());

  alertStore.callAlert(TypeAlert.success, "Copiado com sucesso!");
}

const store = useJsonStore();
const jsonContent = ref("");
const jsonValidation = new JsonValidation();

function format(content: string) {
  const jsonIsValid = jsonValidation.verifyJSON(content);

  if (jsonIsValid) {
    store.setJson(content);
    return store.jsonToArray();
  }
}

function beatifulJson(json: string) {
  const jsonObject = JSON.parse(json);

  jsonContent.value = JSON.stringify(jsonObject, null, 10);
  store.json = jsonContent.value;
}
</script>

<style scoped></style>
