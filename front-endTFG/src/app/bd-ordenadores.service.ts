import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BdOrdenadoresService {

  private ordenadores:any
  private caracteristicas:any
  private tipo:any
  private respuesta:any
  private post:any
  private cargando:boolean=true
  private urlDispositivos="http://localhost:8080/api/dispositivos"
  private urlDispositivo="http://localhost:8080/api/dispositivo/id/"
  private urlCaracteristicas="http://localhost:8080/api/caracteristicasfijas"
  private urlTipo="http://localhost:8080/api/tipos"
  private urlPostTipo="http://localhost:8080/api/tipo"
  private urlBase = "http://localhost:8080/api/"
  private body:any


//Saberse esta muy bien
  constructor(private http:HttpClient,private toastr:ToastrService, private router: Router) {

  this.ordenadores = new Array()
  http.get(this.urlDispositivos).subscribe((response)=>{

    this.ordenadores = response


  })
  this.tipo = new Array()
  this.http.get(this.urlTipo).subscribe((response:any)=>{

    this.tipo = response
  })

  this.tipo = new Array()
  this.http.get(this.urlCaracteristicas).subscribe((response:any)=>{
    this.caracteristicas = response
  })
}

getDispositivos(){
  this.ordenadores = new Array()
  this.http.get(this.urlDispositivos).subscribe((response)=>{
    this.ordenadores = response
  })
}

getCaracteristicasEliminadas(){
  this.caracteristicas = new Array()
  this.http.get(this.urlCaracteristicas).subscribe((response)=>{
    this.caracteristicas = response
  })
}

getCaracteristicas(){
  return this.caracteristicas
}
setCrearTipos(crearTipo:string){
   this.body={

    "tipo":""+crearTipo
  }
  console.log(this.body)
}

JsonTipo(){
  this.http.post(this.urlPostTipo,this.body).subscribe((response:any)=>{
    this.post=response
    console.log(this.post)
    this.toastr.success("Se ha insertado correctamente")

  })
}


getTipos(){

  return this.tipo

}
setDispositivo(dispositivo:string){
    this.http.get(this.urlDispositivo+dispositivo).subscribe((response:any)=>{
      this.respuesta = response
      this.cargando=false
    })
}

  eliminarDispositivo(id: number){
    this.http.delete(this.urlBase+"dispositivo/eliminar/"+id).subscribe((response:any)=>{
      this.toastr.success("El dispositivo se ha eliminado correctamente")
      this.getDispositivos()
    })
  }

  eliminarCaracteristica(id: number){
    this.http.delete(this.urlBase+"eliminar/caracteristicafija/"+id).subscribe((response:any)=>{
      this.toastr.success("La caracteristica se ha eliminado correctamente")
      this.getCaracteristicasEliminadas()
    })
  }


  getOrdenadores(){

    return this.ordenadores
  }

  getDispotivo(){

    return (this.respuesta) //aqui se puede añadir un .json o un JSON stringifi
  }
  getIdPdf(){


      return (this.respuesta.id) //aqui se puede añadir un .json o un JSON stringifi
    }
 estaCargando(){
   return this.cargando
 }

}
