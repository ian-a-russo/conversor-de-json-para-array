import { TypeAlert, alertStore } from "@/store";

export class JsonValidation {
  verifyJSON(jsonString: string): boolean {
    if (!jsonString) {
      alertStore.callAlert(
        TypeAlert.warning,
        "O campo JSON não pode ser vazio!"
      );
      return false;
    }

    try {
      JSON.parse(jsonString);
    } catch (error: any) {
      alertStore.callAlert(
        TypeAlert.error,
        `O JSON inserido está no formato inválido! Detalhes: ${String(
          error
        ).slice(12)}`
      );
      console.log(error);
      return false;
    }

    alertStore.callAlert(
      TypeAlert.success,
      "O JSON foi convertido com sucesso!"
    );
    return true;
  }
}
