
export default class Utilities {

  static capitalize(string: string) {
    if (string.length > 0) {
      return string[0].toUpperCase() + string.slice(1);
    }

    return string;
  }
}