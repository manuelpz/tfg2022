import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamFiltrosPantallasService {
  private marca:string=""
  constructor() { }

 
  setMarca(unMarca:string){
    
    this.marca = unMarca
    
  }
  
  getMarca(){
    console.log(this.marca)
    return this.marca
  }
 
}
