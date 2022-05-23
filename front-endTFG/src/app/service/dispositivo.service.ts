import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dispositivo } from '../models/dispositivos/dispositivo';
import { Resultado } from '../models/resultados/resultado';
import { ResultadoFijo } from '../models/resultados/resultado-fijo';


@Injectable({
  providedIn: 'root'
})
export class DispositivoService {
  private urlBase='http://localhost:8080/api/dispositivo/';
  private urlBaseResultado='http://localhost:8080/api/resultado';
  private urlBaseResultadoFijo='http://localhost:8080/api/resultadofijo';
  private urlBaseRespuesta='http://localhost:8080/api/nuevo/';

  constructor(private http: HttpClient) { }

  public guardarResultado(resultado: Resultado): Observable<any>{
    return this.http.post(this.urlBaseResultado ,resultado);
  }

  public guardarResultadoFijo(resultadoFijo: ResultadoFijo): Observable<any>{
    return this.http.post(this.urlBaseResultadoFijo, resultadoFijo);
  }

  public guardarDispo(dispositivo: Dispositivo): Observable<any>{
    return this.http.post( this.urlBase +'nuevo', dispositivo);
  }

  public getUltimoDispositivo(): Observable<any>{
    return this.http.get(this.urlBase +'lastId');
  }

  public guardarRespuesta(respuesta: any): Observable<any>{
    return this.http.post(this.urlBaseRespuesta +'respuesta', respuesta);
  }

}
