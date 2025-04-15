<template>
  <v-alert
    v-if="isActive"
    :text="alertConfig.text"
    :title="alertConfig.title"
    :type="alertConfig.typeofAlert"
  ></v-alert>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { alertStore } from "@/store";

const isActive = computed(() => alertStore.isActive);
const alertConfig = computed(() => alertStore.alertConfig);
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
