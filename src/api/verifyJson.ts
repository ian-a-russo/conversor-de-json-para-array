import { TypeAlert, useAlertStore } from "@/store";

export class JsonValidation {
  private alertStore = useAlertStore();

  verifyJSON(jsonString: string): boolean {
    if (!jsonString) {
      this.alertStore.callAlert(
        TypeAlert.warning,
        "O campo JSON não pode ser vazio!"
      );
      return false;
    }

    try {
      JSON.parse(jsonString);
    } catch (error: any) {
      this.alertStore.callAlert(
        TypeAlert.error,
        `O JSON inserido está no formato inválido! Detalhes: ${String(
          error
        ).slice(12)}`
      );
      console.log(error);
      return false;
    }

    this.alertStore.callAlert(
      TypeAlert.success,
      "O JSON foi convertido com sucesso!"
    );
    return true;
  }
}
