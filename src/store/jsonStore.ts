import { defineStore } from "pinia";

type UseJsonStore = {
  json: string;
  formattedJson: string;
};

export const useJsonStore = defineStore("useJsonStore", {
  state: (): UseJsonStore => {
    return {
      json: "",
      formattedJson: "",
    };
  },

  getters: {
    getJson: (state) => state.json,
    getformattedJson: (state) => state.formattedJson,
  },

  actions: {
    setJson(json: string) {
      this.json = json;
    },
    jsonToArray() {
      this.formatJson(this.json, (key: string) => {
        return `'${key}'`;
      });
    },
    upperJson() {
      this.formatJson(this.json, (key: string) => {
        return `'${key.toUpperCase()}'`;
      });
    },
    lowerJson() {
      this.formatJson(this.json, (key: string) => {
        return `'${key.toLowerCase()}'`;
      });
    },

    formatJson(originalJson: string, callback: (key: string) => string) {
      if (!originalJson) return false;

      let formattedJsonArray: string[] = [];

      for (let key in JSON.parse(originalJson)) {
        const formattedKey = callback(key);
        formattedJsonArray.push(formattedKey);
      }

      this.formattedJson = formattedJsonArray.join(", \n");
    },
  },
});
