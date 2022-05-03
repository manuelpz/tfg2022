import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamFiltrosOrdenadoresService {

  private patron:string=""
  constructor() { }

 
  setPatron(unPatron:string){
    
    this.patron = unPatron
    
  }
  
  getPatron(){
    console.log(this.patron)
    return this.patron
  }
}
