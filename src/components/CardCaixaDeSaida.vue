<script setup lang="ts">
import CaixaDeSaidaArray from "./CaixaDeSaidaArray.vue";
</script>

<template>
  <v-card class="mx-auto" width="400">
    <template v-slot:prepend>
      <v-icon class="rotated-icon">mdi-arrow-up-bold-box-outline</v-icon>
    </template>
    <CaixaDeSaidaArray />
    <template v-slot:title>
      <span class="font-weight-black">Array</span>
    </template>
  </v-card>
</template>

<style scoped>
.rotated-icon {
  display: inline-block;
  transform: rotate(180deg);
}
</style>
