<template>
  <v-main class="mt-1 mx-1">
    <Alert />
    <v-row class="align-center justify-center">
      <v-col cols="12" md="6">
        <CardJson />
      </v-col>
      <v-col cols="12" md="6">
        <CardArray />
      </v-col>
    </v-row>
  </v-main>
</template>

<script setup lang="ts">
import CardArray from "./components/CardArray.vue";
import CardJson from "./components/CardJson.vue";
import Alert from "@/components/notifications/Alert.vue";
</script>
