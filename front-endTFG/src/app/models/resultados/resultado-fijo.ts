import { caracteristicaf } from "../caracteristicas/caracteristicaf";
import { Dispositivo } from "../dispositivos/dispositivo";

export class ResultadoFijo {

  dispositivo: any;
  caracteristicaf: any;
  respuesta: string;

  constructor(dispositivo: Dispositivo, caracteristicaf: caracteristicaf, respuesta: string) {
    this.dispositivo = dispositivo;
    this.caracteristicaf = caracteristicaf;
    this.respuesta = respuesta;
  }
}
