import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Dispositivo } from '../../models/dispositivo';
import { Tipo } from '../../models/tipo';
import { DispositivoService } from '../../service/dispositivo.service';


@Component({
  selector: 'app-nuevo-dispositivo',
  templateUrl: './nuevo-dispositivo.component.html',
  styleUrls: ['./nuevo-dispositivo.component.css']
})
export class NuevoDispositivoComponent implements OnInit {

  tipo!: Tipo;
  private tipos: any;
  private urlGet='http://localhost:8080/api/tipos';

  constructor(
    private dispositivoService: DispositivoService,
    private toastr: ToastrService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.urlGet).subscribe(
      (response: any) =>{
        this.tipos = response;
      })
  }

  crear(): void {
    const dispositivo = new Dispositivo(this.tipo);
    this.dispositivoService.guardar(dispositivo).subscribe(
      data =>{
        this,this.toastr.success('Dispositivo creado correctamente','',{
          timeOut: 10000,
          positionClass: 'toast-top-center'
        });
        this.router.navigate(['/nav']);
      },
      err =>{
        this.toastr.error('Error al crear dispositivo','ERROR',{
          timeOut: 10000,
          positionClass: 'toast-top-center'
    });
    this.router.navigate(['/nuevo-dispositivo']);
    });
  }

  getTipos(): any{
    return this.tipos
  }
}
