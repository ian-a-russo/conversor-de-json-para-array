import { reactive } from "vue";

export type UseJsonStore = {
  json: string;
  formattedJson: string;
};

class JsonStore {
  public json: string = "";
  public formattedJson: string = "";

  setJson(json: string) {
    this.json = json;
  }

  jsonToArray() {
    this.formatJson(this.json, (key: string) => {
      return `'${key}'`;
    });
  }

  upperJson() {
    this.formatJson(this.json, (key: string) => {
      return `'${key.toUpperCase()}'`;
    });
  }

  lowerJson() {
    this.formatJson(this.json, (key: string) => {
      return `'${key.toLowerCase()}'`;
    });
  }

  formatJson(originalJson: string, callback: (key: string) => string) {
    if (!originalJson) return false;

    let formattedJsonArray: string[] = [];

    for (let key in JSON.parse(originalJson)) {
      const formattedKey = callback(key);
      formattedJsonArray.push(formattedKey);
    }

    this.formattedJson = formattedJsonArray.join(", \n");
  }
}

export const jsonStore = reactive(new JsonStore());
