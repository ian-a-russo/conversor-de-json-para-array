<template>
  <v-container fluid>
    <v-textarea :readonly="true" :value="array">{{ array }}</v-textarea>
  </v-container>
</template>

<script setup lang="ts">
import { useJsonStore } from "@/store";
import { computed } from "vue";

const store = useJsonStore();
const array = computed(() => store.getJsonConvertido);
</script>
