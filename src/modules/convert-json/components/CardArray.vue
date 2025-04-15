<template>
  <v-card subtitle="Seu texto final">
    <template v-slot:prepend>
      <v-icon class="rotated-icon">mdi-arrow-up-bold-box-outline</v-icon>
    </template>
    <v-card-text>
      <JavaScriptCodearea
        :item-code-prop="array"
        height="780px"
        max-height="1000px"
      />
      <v-card-actions class="d-flex justify-end align-center">
        <v-btn
          v-for="action in actions"
          :color="action.color"
          @click="(jsonStore as any)[action.click]()"
          variant="tonal"
        >
          {{ action.title }}
          <v-tooltip activator="parent" location="left">{{
            action.description
          }}</v-tooltip>
        </v-btn>
        <v-btn class="copy" size="35px" @click="copy" variant="tonal" icon>
          <v-icon>mdi-content-copy</v-icon>
          <v-tooltip activator="parent" location="left">Copiar</v-tooltip>
        </v-btn>
      </v-card-actions>
    </v-card-text>
    <template v-slot:title>
      <span class="font-weight-black">Array</span>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import { alertStore, jsonStore, TypeAlert } from "@/store";
import { computed } from "vue";
import JavaScriptCodearea from "../textarea/JavaScriptCodearea.vue";

const textToCopy = computed(() => jsonStore.formattedJson);

async function copy() {
  await navigator.clipboard.writeText(`[\n${textToCopy.value.toString()}]`);

  alertStore.callAlert(TypeAlert.success, "Copiado com sucesso!");
}

const actions = [
  {
    color: "secondary",
    click: "lowerJson",
    title: "LowerCase",
    description: "Formatar para lowercase",
  },
  {
    color: "cyan",
    click: "jsonToArray",
    title: "Normal",
    description: "Retornar para original",
  },
  {
    color: "primary",
    click: "upperJson",
    title: "UpperCase",
    description: "Formatar para uppercase",
  },
];

let array = computed(() => jsonStore.formattedJson);
</script>

<style scoped>
.v-card {
  width: 100%;
  height: 95%;
}

.rotated-icon {
  display: inline-block;
  transform: rotate(180deg);
}
.copy {
  position: absolute;
  right: 1rem;
  top: 1rem;
}
</style>
