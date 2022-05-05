import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dispositivo } from '../models/dispositivo';
import { Tipo } from '../models/tipo';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {
  private tipos: any
  private urlBase='http://localhost:8080/api/dispositivo/';

  constructor(private http: HttpClient) { }

  public guardar(dispositivo: Dispositivo): Observable<any>{
    return this.http.post(this.urlBase + "nuevo", dispositivo);
  }
}
