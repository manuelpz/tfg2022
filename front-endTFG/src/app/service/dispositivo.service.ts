import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dispositivo } from '../models/dispositivo';
import { Resultado } from '../models/resultado';


@Injectable({
  providedIn: 'root'
})
export class DispositivoService {
  private urlBase='http://localhost:8080/api/dispositivo/';

  constructor(private http: HttpClient) { }

  public guardarFull(resultado: Resultado): Observable<any>{
    return this.http.post(this.urlBase ,resultado);
  }

  public guardarDispo(dispositivo: Dispositivo): Observable<any>{
    return this.http.post( this.urlBase +'nuevo', dispositivo);
  }

  public getUltimoDispositivo(): Observable<any>{
    return this.http.get(this.urlBase +'lastId');
  }


}
