import { Tipo } from "./tipo";

export class Caracteristica {
  id: string
  caracteristica: string;

  constructor(id:string, caracteristica: string) {
    this.id = id
    this.caracteristica = caracteristica
  }
}
