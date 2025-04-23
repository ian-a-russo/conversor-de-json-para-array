<template>
  <v-card
    subtitle="Lista com os itens do JSON"
    :max-height="vuetify.display.mobile.value ? '350' : ''"
  >
    <template v-slot:prepend>
      <v-icon class="rotated-icon">mdi-arrow-up-bold-box-outline</v-icon>
    </template>
    <v-card-text>
      <JavaScriptCodearea
        :item-code-prop="array"
        :height="vuetify.display.mobile.value ? '220px' : '780px'"
        max-height="1000px"
        :is-readonly="true"
      />
      <v-card-actions
        :class="
          vuetify.display.mobile.value
            ? 'd-flex justify-center align-center'
            : 'd-flex justify-end align-center'
        "
      >
        <v-btn
          rounded="lg"
          class="text-subtitle-1"
          v-for="action in actions"
          :color="action.color"
          @click="jsonStore.formatJson(action.click)"
          variant="tonal"
        >
          {{ action.title }}
          <v-tooltip activator="parent" location="left">{{
            action.description
          }}</v-tooltip>
        </v-btn>
        <v-btn class="mx-0" size="35px" @click="copy" variant="tonal" icon>
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
import JavaScriptCodearea from "@/components/textarea/JavaScriptCodearea.vue";
import vuetify from "@/plugins/vuetify";

const textToCopy = computed(() => jsonStore.formattedJson);

async function copy() {
  await navigator.clipboard.writeText(textToCopy.value);

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
</style>
