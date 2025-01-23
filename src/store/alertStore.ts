import { toCorrectString } from "@/utils/correct-string";
import { defineStore } from "pinia";

export enum TypeAlert {
  error = "error",
  warning = "warning",
  success = "success",
}

type UseAlertStore = {
  isActive: boolean;
  alertConfig: AlertConfig;
};

type AlertConfig = {
  text: string;
  title: string;
  typeofAlert: TypeAlert;
};

export const useAlertStore = defineStore("useAlertStore", {
  state: (): UseAlertStore => {
    return {
      isActive: false,
      alertConfig: {
        text: "",
        title: "",
        typeofAlert: TypeAlert.success,
      },
    };
  },

  getters: {
    getIsActive: (state) => state.isActive,
    getAlertConfig: (state) => state.alertConfig,
  },

  actions: {
    callAlert(typeofAlert: TypeAlert, message: string) {
      this.alertConfig = {
        text: message,
        title: toCorrectString(typeofAlert),
        typeofAlert,
      };

      this.generateAlert();
    },

    generateAlert() {
      if (!this.isActive) {
        this.isActive = true;
        setTimeout(() => {
          this.isActive = false;
        }, 2000);
      }
    },
  },
});
