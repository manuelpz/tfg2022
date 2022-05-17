import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaracteristicasPropiasService {

  tipo: any;
  constructor() { }

  setTipo(tipo: any){
    this.tipo = tipo
  }

  getTipo(){
    return this.tipo
  }
}
