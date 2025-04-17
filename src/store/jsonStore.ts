import { isArray } from "class-validator";
import { reactive } from "vue";

export type UseJsonStore = {
  json: string;
  formattedJson: string;
};

class JsonStore {
  public json: string = "";
  public formattedJson: string = "[]";
  public isKeyArray: boolean = true;

  private makeKeyArray(
    json: any,
    formatMethod: string,
    formattedJsonArray: string[]
  ) {
    for (let key in json) {
      const value = json[key];

      if (value && typeof value === "object" && !Array.isArray(value)) {
        const nestedKeys = Object.keys(value);

        const formattedNested = nestedKeys.map((nk) =>
          (this as any)[formatMethod](nk)
        );

        formattedJsonArray.push(`[${formattedNested.join(", \n  ")}]`);
        continue;
      }

      const formattedKey = (this as any)[formatMethod](key);
      formattedJsonArray.push(formattedKey);
    }
  }

  setJson(json: string) {
    this.json = json;
  }

  setIsKeyArray(value: boolean) {
    this.isKeyArray = value;
  }

  normalJson(value: any): any {
    if (typeof value === "string") return `'${value}'`;
    if (isArray(value)) return value.map((item) => this.normalJson(item));
    if (value && typeof value === "object") {
      const result: any = [];
      for (const key in value) {
        result.push(
          this.isKeyArray ? this.normalJson(value) : this.normalJson(value[key])
        );
      }
      return `[${result.join(", \n  ")}]`;
    }
    return value;
  }

  upperJson(value: any): any {
    if (typeof value === "string") return `'${value.toUpperCase()}'`;
    if (isArray(value)) return value.map((item) => this.upperJson(item));
    if (value && typeof value === "object") {
      const result: any = [];
      for (const key in value) {
        result.push(
          this.isKeyArray ? this.upperJson(value) : this.upperJson(value[key])
        );
      }
      return `[${result.join(", \n  ")}]`;
    }
    return value;
  }

  lowerJson(value: any): any {
    if (typeof value === "string") return `'${value.toLowerCase()}'`;

    if (isArray(value)) return value.map((item) => this.lowerJson(item));
    if (value && typeof value === "object") {
      const result: any = [];
      for (const key in value) {
        result.push(
          this.isKeyArray
            ? this.lowerJson(value[key])
            : this.lowerJson(value[key])
        );
      }
      return `[${result.join(", \n  ")}]`;
    }
    return value;
  }

  formatJson(formatMethod: string) {
    if (!this.json) return false;

    const originalJson = JSON.parse(this.json);
    let formattedJsonArray: string[] = [];

    if (this.isKeyArray) {
      this.makeKeyArray(originalJson, formatMethod, formattedJsonArray);

      return (this.formattedJson = `[\n  ${formattedJsonArray.join(
        ", \n  "
      )}\n]`);
    }

    for (let key in originalJson) {
      const formattedKey = (this as any)[formatMethod](originalJson[key]);
      formattedJsonArray.push(formattedKey);
    }

    return (this.formattedJson = `[\n  ${formattedJsonArray.join(
      ", \n  "
    )}\n]`);
  }
}

export const jsonStore = reactive(new JsonStore());
