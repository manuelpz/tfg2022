import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamFiltrosOtrosService {

  private tipo:string=""
  constructor() { }

 
  setTipo(unTipo:string){
    
    this.tipo = unTipo
    
  }
  
  getTipo(){
    
    return this.tipo
  }
}
