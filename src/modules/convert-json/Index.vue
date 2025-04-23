<template>
  <v-main class="mt-1 mx-1">
    <Alert />
    <v-row
      class="align-center justify-center"
      v-if="!vuetify.display.mobile.value"
    >
      <v-col cols="12" md="6">
        <CardJson />
      </v-col>
      <v-col cols="12" md="6">
        <CardArray />
      </v-col>
    </v-row>

    <v-container v-else>
      <CardJson class="mb-3" />
      <CardArray />
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import vuetify from "@/plugins/vuetify";
import CardArray from "./components/CardArray.vue";
import CardJson from "./components/CardJson.vue";
import Alert from "@/components/notifications/Alert.vue";
</script>
