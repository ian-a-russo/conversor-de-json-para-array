import { defineStore } from "pinia";

type UseAlertStore = {
  errorAlert: boolean;
  successAlert: boolean;
  successCopyAlert: boolean;
  warningAlert: boolean;
};

export const useAlertStore = defineStore("useAlertStore", {
  state: (): UseAlertStore => {
    return {
      errorAlert: false,
      successAlert: false,
      successCopyAlert: false,
      warningAlert: false,
    };
  },
  getters: {
    getErrorAlert: (state) => state.errorAlert,
    getSuccessAlert: (state) => state.successAlert,
    getSuccessCopyAlert: (state) => state.successCopyAlert,
    getWarningAlert: (state) => state.warningAlert,
  },
  actions: {
    setSuccessAlert() {
      if (!this.successAlert) {
        this.successAlert = true;
        setTimeout(() => {
          this.successAlert = false;
        }, 3000);
      }
    },

    setSuccessCopyAlert() {
      if (!this.successCopyAlert) {
        this.successCopyAlert = true;
        setTimeout(() => {
          this.successCopyAlert = false;
        }, 3000);
      }
    },

    setErrorAlert() {
      if (!this.errorAlert) {
        this.errorAlert = true;
        setTimeout(() => {
          this.errorAlert = false;
        }, 3000);
      }
    },

    setWarningAlert() {
      if (!this.warningAlert) {
        this.warningAlert = true;
        setTimeout(() => {
          this.warningAlert = false;
        }, 3000);
      }
    },
  },
});
