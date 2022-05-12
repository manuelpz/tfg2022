import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Caracteristica } from 'src/app/models/caracteristica';
import { Opcion } from 'src/app/models/opcion';
import { Resultado } from 'src/app/models/resultado';
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
  opcion!: Opcion
  caracteristica!: Caracteristica
  resultado: Resultado;
  optId: any;
  caracter: any;
  charId: any;
  private tipos: any;
  private caracteristicas: any;
  private opciones: any;
  private urlGet='http://localhost:8080/api/tipos';
  private caracteristicasUrl = 'http://localhost:8080/api/caracteristicas';
  private urlOpciones = 'http://localhost:8080/api/opciones';

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

      this.http.get(this.caracteristicasUrl).subscribe(
        (response: any) =>{
          this.caracteristicas = response;
        })

        this.http.get(this.urlOpciones).subscribe(
          (response: any) =>{
            this.opciones = response;
        })
  }

  crear(): void {
    const dispositivo = new Dispositivo(this.tipo)
    this.dispositivoService.guardarDispo(dispositivo).subscribe(
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

  getCaracteristicas(): any{
    return this.caracteristicas
  }

  getOpciones(): any{
    return this.opciones
  }

  setOptId(e: any){
    console.log(e.target.value)
    this.optId = e.target.value
  }

  setCharValue(value: any){
    console.log(value)
    this.charId = value;
  }
}
