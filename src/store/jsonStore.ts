import { defineStore } from "pinia";

type UseJsonStore = {
  json: string;
  jsonConvertido: string;
};
export const useJsonStore = defineStore("useJsonStore", {
  state: (): UseJsonStore => {
    return {
      json: "",
      jsonConvertido: "",
    };
  },
  getters: {
    getJson: (state) => state.json,
    getJsonConvertido: (state) => state.jsonConvertido,
  },
  actions: {
    jsonParaArray() {
      const jsonObject = JSON.parse(this.json);
      let jsonConvertidoArray = [];

      for (let chave in jsonObject) {
        jsonConvertidoArray.push(`'${chave}'`);
      }

      this.jsonConvertido = jsonConvertidoArray.join(", \n");
    },
    setJson(json: string) {
      this.json = json;
    },
    upperJson() {
      const jsonObject = JSON.parse(this.json);
      let jsonConvertidoArray = [];

      for (let chave in jsonObject) {
        jsonConvertidoArray.push(`'${chave.toUpperCase()}'`);
      }

      this.jsonConvertido = jsonConvertidoArray.join(", \n");
    },
    lowerJson() {
      const jsonObject = JSON.parse(this.json);
      let jsonConvertidoArray = [];

      for (let chave in jsonObject) {
        jsonConvertidoArray.push(`'${chave.toLowerCase()}'`);
      }

      this.jsonConvertido = jsonConvertidoArray.join(", \n");
    },
  },
});
