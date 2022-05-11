import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dispositivo } from '../models/dispositivo';
import { Resultado } from '../models/resultado';


@Injectable({
  providedIn: 'root'
})
export class DispositivoService {
  private urlBase='http://localhost:8080/api/resultado';

  constructor(private http: HttpClient) { }

  public guardar(dispositivo: Dispositivo): Observable<any>{
    return this.http.post(this.urlBase +'nuevo' ,dispositivo);
  }
}
