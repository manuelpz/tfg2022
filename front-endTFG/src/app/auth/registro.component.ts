import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nuevoUsuario!: NuevoUsuario;
  nombre!: string;
  nombreUsuario!: string;
  email!: string;
  password!: string;
  errMsj!: string;
  isLogged = false;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onRegister(): void {
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      {
        next: (data: any) => {
          this.toastr.success('Ya puedes iniciar sesion con tu nuevo administrador','Registro completado',{
            timeOut: 10000,
            positionClass: 'toast-top-center'
          });
          this.router.navigate(['/nav']);
        },
        error: err => {
          this.errMsj = err.error.mensaje;
          this.toastr.error(this.errMsj, 'ERROR',{
            timeOut: 10000,
            positionClass: 'toast-top-center'});
        }
      });
    }
  }