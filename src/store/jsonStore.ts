import { reactive } from "vue";

export type UseJsonStore = {
  json: string;
  formattedJson: string;
};

class JsonStore {
  public json: string = "";
  public formattedJson: string = "[]";
  public isKeyArray: boolean = true;

  setJson(json: string) {
    this.json = json;
  }

  setIsKeyArray(value: boolean) {
    this.isKeyArray = value;
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

  formatJson(originalJsonString: string, callback: (value: string) => string) {
    if (!originalJsonString) return false;

    const originalJson = JSON.parse(originalJsonString);
    let formattedJsonArray: string[] = [];

    if (this.isKeyArray) {
      for (let key in originalJson) {
        const formattedKey = callback(key);
        formattedJsonArray.push(formattedKey);
      }

      return (this.formattedJson = `[\n  ${formattedJsonArray.join(
        ", \n  "
      )}\n]`);
    }

    for (let key in originalJson) {
      const formattedKey = callback(originalJson[key]);
      formattedJsonArray.push(formattedKey);
    }

    return (this.formattedJson = `[\n  ${formattedJsonArray.join(
      ", \n  "
    )}\n]`);
  }
}

export const jsonStore = reactive(new JsonStore());
