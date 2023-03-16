export class ImperialMass {
  private _masa: number; // Guardara en onzas

  /**
   * Constructor de la clase ImperialMass
   * @param masa masa en onzas
   */
  constructor(masa: number) {
    this._masa = masa;
  }

  /**
   * Devuelve la masa en onzas, como son guardadas
   * @returns la masa en onzas
   */
  getOnzas() {
    return this._masa;
  }

  /**
   * Devuelve la masa en Libras
   * @returns la masa en libras
   */
  getLibras() {
    return this._masa / 16; // Devolvemos masa en libras
  }

  /**
   * Devuelve la masa en Piedras
   * @returns la masa en piedras
   */
  getPiedras() {
    return this._masa / 224; // Devolvemos masa en piedras
  }

  /**
   * Devuelve la masa en Centenas
   * @returns la masa en centenas
   */
  getCentenas() {
    return this._masa / 1792; // Devolvemos masa en centenas
  }

  /**
   * Devuelve la masa en Toneladas
   * @returns la masa en toneladas
   */
  getToneladas() {
    return this._masa / 35840; // Devolvemos masa en toneladas
  }



  /**
   * Inserta la masa en onzas
   * @param peso masa en onzas a insertar
   * @returns el valor insertado
   */
  setOnzas(peso: number) {
    return this._masa = peso;
  }

  /**
   * Inserta una masa en libras como onzas
   * @param peso masa en libras a convertir e insertar
   * @returns el valor insertado
   */
  setLibras(peso: number) {
    return this._masa = peso * 16;
  }

  /**
   * Inserta una masa en piedras como onzas
   * @param peso masa en piedras a convertir e insertar
   * @returns el valor insertado
   */
  setPiedras(peso: number) {
    return this._masa = peso * 224;
  }

  /**
   * Inserta una masa en centenas como onzas
   * @param peso masa en centenas a convertir e insertar
   * @returns el valor insertado
   */
  setCentenas(peso: number) {
    return this._masa = peso * 1792;
  }

  /**
   * Inserta una masa en toneladas como onzas
   * @param peso masa en toneladas a convertir e insertar
   * @returns el valor insertado
   */
  setToneladas(peso: number) {
    return this._masa = peso * 35840;
  }
}