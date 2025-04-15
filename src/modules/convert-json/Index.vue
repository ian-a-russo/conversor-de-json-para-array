<template>
  <v-main class="mt-1 mx-1">
    <AlertsJSON />
    <v-row class="align-center justify-center">
      <v-col cols="12" md="6">
        <CardJson />
      </v-col>
      <v-col cols="12" md="6"><CardArray /></v-col>
    </v-row>
  </v-main>
</template>

<script setup lang="ts">
import CardArray from "./cards/CardArray.vue";
import CardJson from "./cards/CardJson.vue";
import AlertsJSON from "./notifications/AlertsJSON.vue";
</script>
