import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BdOrdenadoresService {

  private ordenadores:any
  private post:any
  private otros:any
  private urlOrdenadores="http://localhost:8080/api/dispositivo/ordenadores"
  private urlPost="http://localhost:8080/api/dispositivo"
  private urlGet="http://localhost:8080/api/dispositivos"

//Saberse esta muy bien
  constructor(private http:HttpClient,
              private route: ActivatedRoute,
              private router: Router) {
  this.ordenadores = new Array()
  http.get(this.urlOrdenadores).subscribe((response)=>{

    this.ordenadores = response
  })

  this.otros = new Array()
  http.get(this.urlGet).subscribe((response)=>{

    this.otros = response
  })



}
  getOrdenadores(){

    return this.ordenadores
  }

  salir(){
    return this.router.navigate(['/ordenadores'])
  }

  postOrdenador(url:string, body:any){
    return this.http.post(url,body)
  }

  borrarUltimo(url:string, body:any){
    return this.http.delete(url,body)
  }

  getOtros(){
    return this.otros
  }


}
