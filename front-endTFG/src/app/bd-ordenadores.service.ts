import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BdOrdenadoresService {

  private ordenadores:any
  
  private urlOrdenadores="http://localhost:8080/api/dispositivos"

//Saberse esta muy bien
  constructor(private http:HttpClient) { 
  this.ordenadores = new Array()
  http.get(this.urlOrdenadores).subscribe((response)=>{

    this.ordenadores = response
  

  })
 
 
}
  getOrdenadores(){
  
    return this.ordenadores
  }
 
  
}
