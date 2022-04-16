import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamFiltrosOrdenadoresService {

  private marca:string="HP"
  constructor() { }

  getMarca(){
    console.log(this.marca)
    return this.marca
  }
  setMarca(unMarca:string){
    console.log(unMarca)
    this.marca = unMarca
  }
}
