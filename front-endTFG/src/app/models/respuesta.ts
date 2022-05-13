import { CaracteristicaFija } from "./caracteristica-fija"

export class Respuesta {
  respuesta: string
  caracteristicaf: CaracteristicaFija

  constructor(respuesta: string, caracteristicaf: CaracteristicaFija) {
    this.respuesta = respuesta
    this.caracteristicaf = caracteristicaf
  }
}
