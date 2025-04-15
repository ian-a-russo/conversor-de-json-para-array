<template>
  <v-card
    color="grey-darken-4"
    prepend-icon="mdi-arrow-up-bold-box-outline"
    subtitle="Insira seu texto ou arquivo JSON aqui"
  >
    <v-card-text>
      <JSONCodearea
        :item-code-prop="jsonContent"
        @update:item-code-prop="(value: any) => (jsonContent = value)"
        height="780px"
        max-height="1000px"
      />
      <v-card-actions class="d-flex justify-end align-center">
        <v-btn @click="beautify()" color="cyan" variant="tonal" rounded="lg">
          Beautify JSON
          <v-tooltip activator="parent" location="left"
            >Formatar JSON</v-tooltip
          >
          <v-icon icon="mdi-checkbox-marked-circle" end></v-icon>
        </v-btn>
        <v-btn
          @click="format(jsonContent as string)"
          color="primary"
          variant="tonal"
          rounded="lg"
        >
          Converter
          <v-tooltip activator="parent" location="left">
            Converter chaves para array
          </v-tooltip>
          <v-icon icon="mdi-checkbox-marked-circle" end></v-icon>
        </v-btn>
        <v-btn class="copy" size="35px" @click="copy" variant="tonal" icon>
          <v-icon>mdi-content-copy</v-icon>
          <v-tooltip activator="parent" location="left">Copiar</v-tooltip>
        </v-btn>
      </v-card-actions>
    </v-card-text>
    <template v-slot:title>
      <span class="font-weight-black">JSON</span>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import { JsonValidation } from "@/validations/verifyJson";
import { ref } from "vue";
import { jsonStore, TypeAlert, alertStore } from "@/store";
import { computed } from "vue";
import JSONCodearea from "../textarea/JSONCodearea.vue";

const textToCopy = computed(() => jsonStore.json);

async function copy() {
  await navigator.clipboard.writeText(textToCopy.value.toString());

  alertStore.callAlert(TypeAlert.success, "Copiado com sucesso!");
}

const jsonContent = ref<string>("");
const jsonValidation = new JsonValidation();

function format(content: string) {
  const jsonIsValid = jsonValidation.verifyJSON(content);

  if (jsonIsValid) {
    jsonStore.setJson(content);
    return jsonStore.jsonToArray();
  }
}

function beautify() {
  try {
    if (!jsonContent.value)
      return alertStore.callAlert(
        TypeAlert.warning,
        "JSON não pode ser vazio!"
      );

    const json = JSON.parse(jsonContent.value as string);
    const formattedJson = JSON.stringify(json, null, 2) || "{}";

    if (formattedJson == jsonContent.value)
      return alertStore.callAlert(TypeAlert.warning, "JSON já formatado.");

    jsonContent.value = formattedJson;

    alertStore.callAlert(TypeAlert.success, "JSON formatado com sucesso.");
  } catch (e) {
    alertStore.callAlert(TypeAlert.error, "Não foi possível formatar o JSON.");
  }
}
</script>

<style scoped>
.v-card {
  width: 100%;
  height: 95%;
}
</style>
