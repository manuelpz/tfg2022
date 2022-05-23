import { Caracteristica } from '../caracteristicas/caracteristica';
import { Dispositivo } from '../dispositivos/dispositivo';
import { Opcion } from '../opciones/opcion';

export class Resultado {
  dispositivo: Dispositivo;
  opcion: Opcion;
  caracteristica: Caracteristica;

  constructor(
    dispositivo: Dispositivo,
    caracteristica: Caracteristica,
    opcion: Opcion
  ) {
    this.dispositivo = dispositivo;
    this.opcion = opcion;
    this.caracteristica = caracteristica;
  }
}
