import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BdOrdenadoresService {

  private ordenadores:any
  private respuesta:any
  private post:any
  private cargando:boolean=true
  private urlDispositivos="http://localhost:8080/api/dispositivos"
  private urlDispositivo="http://localhost:8080/api/dispositivo/id/"
  private urlTipos="http://localhost:8080/api/tipos"


//Saberse esta muy bien
  constructor(private http:HttpClient) { 
  this.ordenadores = new Array()
  http.get(this.urlDispositivos).subscribe((response)=>{
    
    this.ordenadores = response
  

  })
  
    
 
 
}
setDispositivo(dispositivo:string){
 
    this.http.get(this.urlDispositivo+dispositivo).subscribe((response:any)=>{

      this.respuesta = response
      this.cargando=false
     
     
    })
}
  getOrdenadores(){
  
    return this.ordenadores
  }

  getDispotivo(){
  console.log(this.respuesta)
   console.log("AAAAA")
    return (this.respuesta) //aqui se puede añadir un .json o un JSON stringifi
  }
  
 estaCargando(){
   return this.cargando
 }
  
}
