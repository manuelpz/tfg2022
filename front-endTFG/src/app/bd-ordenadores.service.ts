import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BdOrdenadoresService {

  private ordenadores:any
  private tipo:any
  private respuesta:any
  private post:any
  private cargando:boolean=true
  private urlDispositivos="http://localhost:8080/api/dispositivos"
  private urlDispositivo="http://localhost:8080/api/dispositivo/id/"
  private urlTipo="http://localhost:8080/api/tipos"
  private urlPostTipo="http://localhost:8080/api/tipo"
  private urlCaracteristicasFijas = "localhost:8080/api/caracteristicasfijas"
  private body:any


//Saberse esta muy bien
  constructor(private http:HttpClient,private toastr:ToastrService) {

  this.ordenadores = new Array()
  http.get(this.urlDispositivos).subscribe((response)=>{

    this.ordenadores = response


  })
  this.tipo = new Array()
  this.http.get(this.urlTipo).subscribe((response:any)=>{

    this.tipo = response


  })


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
