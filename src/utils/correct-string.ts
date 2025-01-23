export function toCorrectString(string: string) {
  const correctedString = string.replace(/\s+/g, ' ').trim();

  return correctedString.charAt(0).toUpperCase() + correctedString.slice(1);
}
