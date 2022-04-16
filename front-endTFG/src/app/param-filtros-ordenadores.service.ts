import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamFiltrosOrdenadoresService {

  private marca:string=""
  constructor() { }

  getMarca(){
    return this.marca
  }
  setMarca(unMarca:string){
    this.marca = unMarca
  }
}
