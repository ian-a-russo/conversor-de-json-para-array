<template>
  <v-card subtitle="Seu texto final">
    <template v-slot:prepend>
      <v-icon class="rotated-icon">mdi-arrow-up-bold-box-outline</v-icon>
    </template>
    <CaixaDeSaidaArray />
    <template v-slot:title>
      <span class="font-weight-black">Array</span>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import CaixaDeSaidaArray from "../DataManagement/CaixaDeSaidaArray.vue";
</script>

<style scoped>
.v-card {
  width: 100%;
  height: 100%;
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
