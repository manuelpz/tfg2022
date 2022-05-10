import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaracteristicasService {

  private caracteristicas: any[];

  constructor(private http:HttpClient) { }

}
