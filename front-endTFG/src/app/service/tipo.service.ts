import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoService {

  urlGet = 'http://localhost:8080/api/tipos';
  urlPost='http://localhost:8080/api/tipo';
  urlDelete = 'http://localhost:8080/api/tipo/';

  constructor() { }
}
