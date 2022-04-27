import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BdOrdenadoresService {

  private ordenadores:any
  private post:any
  private urlOrdenadores="http://localhost:8080/api/dispositivo/ordenador"
  private urlPost="localhost:8080/api/dispositivo"

//Saberse esta muy bien
  constructor(private http:HttpClient,
              private route: ActivatedRoute,
              private router: Router) {
  this.ordenadores = new Array()
  http.get(this.urlOrdenadores).subscribe((response)=>{

    this.ordenadores = response


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



}
