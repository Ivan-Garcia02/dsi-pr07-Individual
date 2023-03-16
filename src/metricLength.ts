export class MetricLength {
  private _longitud: number; // Guardara en centrimetros

  /**
   * Constructor de la clase MetricLength
   * @param longitud longitud en centrimetros
   */
  constructor(longitud: number) {
    this._longitud = longitud;
  }

  /**
   * Devuelve la longitud en centrimetros como son guardadas
   * @returns la longitud en centrimetros
   */
  getCentrimetros() {
    return this._longitud;
  }

  /**
   * Devuelve la longitud en Metros
   * @returns la longitud en metros
   */
  getMetros() {
    return this._longitud / 100; // Devolvemos longitud en metros
  }

  /**
   * Devuelve la longitud en Kilometros
   * @returns la longitud en kilometros
   */
  getKilometros() {
    return this._longitud / 100000; // Devolvemos longitud en kilometros
  }



  /**
   * Inserta la longitud en centrimetros
   * @param long longitud en centrimetros a insertar
   * @returns el valor insertado
   */
  setCentrimetros(long: number) {
    return this._longitud = long;
  }

  /**
   * Inserta una longitud en metros como centrimetros
   * @param long longitud en metros a convertir e insertar
   * @returns el valor insertado
   */
  setMetros(long: number) {
    return this._longitud = long * 100;
  }

  /**
   * Inserta una longitud en kilometros como centrimetros
   * @param long longitud en kilometros a convertir e insertar
   * @returns el valor insertado
   */
   setKilometros(long: number) {
    return this._longitud = long * 100000;
  }
}