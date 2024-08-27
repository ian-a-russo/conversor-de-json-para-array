import { defineStore } from "pinia";

type UseJsonStore = {
  json: string;
  jsonConvertido: string[];
};
export const useJsonStore = defineStore("useJsonStore", {
  state: (): UseJsonStore => {
    return {
      json: "",
      jsonConvertido: [],
    };
  },
  getters: {
    getJson: (state) => state.json,
    getJsonConvertido: (state) => state.jsonConvertido,
  },
  actions: {
    jsonParaArray() {
      const jsonObject = JSON.parse(this.json);
      const atributosJSON = [];
      for (let chave in jsonObject) {
        atributosJSON.push(`'${chave}'`);
      }

      this.jsonConvertido = atributosJSON;
    },
    setJson(json: string) {
      this.json = json;
    },
    upperJson() {
      const jsonObject = JSON.parse(this.json);
      const atributosJSON = [];
      for (let chave in jsonObject) {
        atributosJSON.push(`'${chave.toUpperCase()}'`);
      }

      this.jsonConvertido = atributosJSON;
    },
    lowerJson() {
      const jsonObject = JSON.parse(this.json);
      const atributosJSON = [];
      for (let chave in jsonObject) {
        atributosJSON.push(`'${chave.toLowerCase()}'`);
      }

      this.jsonConvertido = atributosJSON;
    },
  },
});
