
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../models/login-usuario';
import { JwtDTO } from '../models/jwt-dto';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient, private toastr: ToastrService) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    this.toastr.success('Cuenta Creada', 'OK', {
      timeOut: 3000, positionClass: 'toast-top-center'
    });
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);

  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUsuario);
  }

}
