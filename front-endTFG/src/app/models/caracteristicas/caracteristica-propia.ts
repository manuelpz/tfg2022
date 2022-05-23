import { Tipo } from '../tipo';

export class CaracteristicaPropia {
  caracteristica: string;
  tipo: Tipo;

  constructor(caracteristica: string, tipo: Tipo) {
    this.caracteristica = caracteristica;
    this.tipo = tipo;
  }
}
