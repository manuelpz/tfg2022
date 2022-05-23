export class OpcionNueva {

  id?:number
  opcion: string
  caracteristica: any

  constructor(opcion: string, caracteristica: any) {
    this.opcion = opcion
    this.caracteristica = caracteristica
  }
}
