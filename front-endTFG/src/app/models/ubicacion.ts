export class Ubicacion {
  lugar: string
  descripcion: string
  localDateTime: Date
  fecha_muerte: any

  constructor(lugar: string, descripcion: string, localDateTime: Date, fecha_muerte: any) {
    this.lugar = lugar
    this.descripcion = descripcion
    this.localDateTime = localDateTime
    this.fecha_muerte = fecha_muerte
  }
}
