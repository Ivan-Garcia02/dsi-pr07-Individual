import { ImperialLength } from "./imperialLength"
import { MetricLength } from "./metricLength";

export class AdapterLength extends MetricLength {
  /**
   * Constructor de la clase AdapterLength
   * @param sistema sistema imperial
   */
  constructor(private sistema: ImperialLength) {
    super(0);
  }

  /**
   * Devuelve en centimetros las pulgadas
   * @returns convierte pulgadas a centimetros
   */
  getCentrimetros(): number {
    return this.sistema.getPulgadas() * 2.54;
  }

  /**
   * Devuelve en metros las pulgadas
   * @returns convierte pulgadas a metros
   */
  getMetros(): number {
    return this.sistema.getPulgadas() / 39.37;
  }

  /**
   * Devuelve en kilometros las pulgadas
   * @returns convierte pulgadas a kilometros
   */
  getKilometros(): number {
    return this.sistema.getPulgadas() / 39370;
  }
}

let imperial = new ImperialLength(15);
let adaptado = new AdapterLength(imperial);

console.log(adaptado.getCentrimetros());
console.log(adaptado.getMetros());
console.log(adaptado.getKilometros());