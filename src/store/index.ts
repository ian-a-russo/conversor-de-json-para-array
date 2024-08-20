import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useJsonStore = defineStore("categoria", () => {
  const json = ref("");
  const jsonConvertido = ref<String[]>([]);

  const getJson = computed(() => json.value);
  const getJsonConvertido = computed(() => jsonConvertido.value);

  function fetchJson(jsonContent: string) {
    json.value = jsonContent;
  }

  function converterChavesJSONParaArray() {
    const jsonObject = JSON.parse(json.value);
    const atributosJSON = [];
    for (let chave in jsonObject) {
      atributosJSON.push(`"${chave.toLowerCase()}"   `);
    }
    jsonConvertido.value = atributosJSON;
  }

  return {
    json,
    jsonConvertido,
    getJson,
    getJsonConvertido,
    fetchJson,
    converterChavesJSONParaArray,
  };
});
