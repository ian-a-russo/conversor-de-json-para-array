import { toCorrectString } from "@/utils/correct-string";
import { reactive } from "vue";
export enum TypeAlert {
  error = "error",
  warning = "warning",
  success = "success",
}

type AlertConfig = {
  text: string;
  title: string;
  typeofAlert: TypeAlert;
};

class AlertStore {
  public isActive: boolean = false;
  public alertConfig: AlertConfig = {
    text: "",
    title: "",
    typeofAlert: TypeAlert.success,
  };

  callAlert(typeofAlert: TypeAlert, message: string) {
    this.alertConfig = {
      text: message,
      title: toCorrectString(typeofAlert),
      typeofAlert,
    };

    this.generateAlert();
  }

  generateAlert() {
    if (!this.isActive) {
      this.isActive = true;
      setTimeout(() => {
        this.isActive = false;
      }, 2000);
    }
  }
}

export const alertStore = reactive(new AlertStore());
