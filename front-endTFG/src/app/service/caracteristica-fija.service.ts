import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaracteristicaFijaService {

  private  urlBase="http://localhost:8080/api/"
  private caracteristicaf: any;

  constructor(private http:HttpClient) { }

  

}
