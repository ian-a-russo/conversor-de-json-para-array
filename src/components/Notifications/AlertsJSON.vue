<template>
  <v-alert
    v-if="isActive"
    :text="alertConfig.text"
    :title="alertConfig.title"
    :type="alertConfig.typeofAlert"
  ></v-alert>
</template>

<script setup lang="ts">
import { useAlertStore } from "@/store/alertStore";
import { computed } from "vue";

const store = useAlertStore();
const isActive = computed(() => store.getIsActive);
const alertConfig = computed(() => store.alertConfig);
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
