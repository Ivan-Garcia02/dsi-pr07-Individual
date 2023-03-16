export class ImperialLength {
  private _longitud: number; // Guardara en pulgadas

  /**
   * Constructor de la clase ImperialLength
   * @param longitud longitud en pulgadas
   */
  constructor(longitud: number) {
    this._longitud = longitud;
  }

  /**
   * Devuelve la longitud en pulgadas como son guardadas
   * @returns la longitud en pulgadas
   */
  getPulgadas() {
    return this._longitud;
  }

  /**
   * Devuelve la longitud en Pies
   * @returns la longitud en pies
   */
  getPies() {
    return this._longitud / 12; // Devolvemos longitud en pies
  }

  /**
   * Devuelve la longitud en Yardas
   * @returns la longitud en yardas
   */
  getYardas() {
    return this._longitud / 36; // Devolvemos longitud en yardas
  }

  /**
   * Devuelve la longitud en Millas
   * @returns la longitud en millas
   */
  getMillas() {
    return this._longitud / 63360; // Devolvemos longitud en millas
  }



  /**
   * Inserta la longitud en pulgadas
   * @param long longitud en pulgadas a insertar
   * @returns el valor insertado
   */
  setPulgadas(long: number) {
    return this._longitud = long;
  }

  /**
   * Inserta una longitud en pies como pulgadas
   * @param long longitud en pies a convertir e insertar
   * @returns el valor insertado
   */
  setPies(long: number) {
    return this._longitud = long * 12;
  }

  /**
   * Inserta una longitud en yardas como pulgadas
   * @param long longitud en yardas a convertir e insertar
   * @returns el valor insertado
   */
   setYardas(long: number) {
    return this._longitud = long * 36;
  }

  /**
   * Inserta una longitud en millas como pulgadas
   * @param long longitud en millas a convertir e insertar
   * @returns el valor insertado
   */
   setMillas(long: number) {
    return this._longitud = long * 63360;
  }
}