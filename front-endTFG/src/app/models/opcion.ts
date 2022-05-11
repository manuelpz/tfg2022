import { Caracteristica } from "./caracteristica";

export class Opcion {

  opcion: string;
  caracteristica: Caracteristica

  constructor(opcion:string ,caracteristica: Caracteristica) {
    this.opcion = opcion
    this.caracteristica = caracteristica
  }

}
