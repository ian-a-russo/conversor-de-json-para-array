<script setup lang="ts">
import CaixaDeSaidaArray from "../DataManagement/CaixaDeSaidaArray.vue";
import { useAlertStore, useJsonStore } from "@/store";
import { computed } from "vue";

const store = useJsonStore();
const alertStore = useAlertStore();

const textToCopy = computed(() => store.jsonConvertido);

async function copy() {
  await navigator.clipboard.writeText(`[\n${textToCopy.value.toString()}]`);
  alertStore.setSuccessCopyAlert();
}
</script>

<template>
  <v-card subtitle="Seu texto final">
    <template v-slot:prepend>
      <v-icon class="rotated-icon">mdi-arrow-up-bold-box-outline</v-icon>
      <v-btn class="copy" @click="copy">
        <v-icon>mdi-content-copy</v-icon></v-btn
      >
    </template>
    <CaixaDeSaidaArray />
    <template v-slot:title>
      <span class="font-weight-black">Array</span>
    </template>
  </v-card>
</template>

<style scoped>
.v-card {
  width: 25rem;
  height: 18.8rem;
  margin-left: 19rem;
  position: relative;
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

@media (max-width: 1450px) {
  .v-card {
    width: 22.8rem;
    height: 17.8rem;
    margin-left: 0rem;
    margin-top: 15rem;
    position: absolute;
  }
}
</style>
