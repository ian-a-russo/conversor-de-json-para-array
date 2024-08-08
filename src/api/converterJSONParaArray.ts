export async function converterJSONParaArray(json: Object) {
  const atributosJSON = [];
  for (let chave in json) {
    atributosJSON.push(chave.toLowerCase());
  }
  console.log(atributosJSON);

  return atributosJSON;
}
