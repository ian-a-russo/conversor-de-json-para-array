export function verifyJSON(jsonString: string): boolean {
  try {
    JSON.parse(jsonString);
    return true;
  } catch (e) {
    return false;
  }
}
