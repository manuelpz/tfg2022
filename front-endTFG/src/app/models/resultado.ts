import { Caracteristica } from "./caracteristica";
import { Dispositivo } from "./dispositivo";
import { Opcion } from "./opcion";

export class Resultado {

  dispositivo: Dispositivo
  opcion: Opcion
  caracteristica: Caracteristica

  constructor(dispositivo: Dispositivo, opcion: Opcion, caracteristica: Caracteristica) {
    this.dispositivo = dispositivo
    this.opcion = opcion
    this.caracteristica = caracteristica
  }

}
