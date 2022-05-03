import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamFiltrosOrdenadoresService {

  private patron:string=""
  private patronTipo:string=""
  constructor() { }

 
  setPatron(unPatron:string){
    
    this.patron = unPatron
    
  }

  setPatronTipo(unPatronTipo:string){
    
    this.patronTipo = unPatronTipo
    
  }  
  getPatron(){
    
    return this.patron
  }
  getPatronTipo(){
    console.log(this.patronTipo)
    return this.patronTipo
  }
}
