import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaracteristicasPropiasService {

  tipo: any;
  constructor() { }

  setTipo(tipo: any){
    localStorage.removeItem("tipo")
    this.tipo = tipo
    localStorage.setItem("tipo",JSON.stringify(this.tipo.tipo))
  }

  getTipo(){
    return localStorage.getItem("tipo")
  }
}
