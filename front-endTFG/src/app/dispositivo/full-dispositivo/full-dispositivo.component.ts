import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { Resultado } from 'src/app/models/resultado';
import { DispositivoService } from 'src/app/service/dispositivo.service';

@Component({
  selector: 'app-full-dispositivo',
  templateUrl: './full-dispositivo.component.html',
  styleUrls: ['./full-dispositivo.component.css']
})
export class FullDispositivoComponent implements OnInit {

  //VARIABLES PUBLICAS
  ultimoDispositivo: any;
  caracteristicas: any;
  opciones: any;
  opcion: any;

  //VARIABLES PRIVADAS
  private caracteristicasUrl = 'http://localhost:8080/api/caracteristicas';
  private urlOpciones = 'http://localhost:8080/api/opciones';

  constructor(private dispositivoService: DispositivoService,
              private http: HttpClient,
              private route: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {

    //OBTENCION ULTIMO DISPOSITIVO
    this.dispositivoService.getUltimoDispositivo().subscribe(
      (response: any) =>{
        this.ultimoDispositivo = response;
      })

      //OBTENCION CARACTERISTICAS
      this.http.get(this.caracteristicasUrl).subscribe(
        (response: any) =>{
          this.caracteristicas = response;
        })

        //OBTENCION OPCIONES
        this.http.get(this.urlOpciones).subscribe(
          (response: any) =>{
            this.opciones = response;
        })
    }

    //GUARDAR EL DISPOSITIVO POR COMPLETO
    guardarFull(){
      let caracteristica = this.opcion.caracteristica;
      const resultado = new Resultado(this.ultimoDispositivo, caracteristica, this.opcion);
      console.log(this.ultimoDispositivo);
      console.log(this.opcion);
      this.dispositivoService.guardarFull(resultado).subscribe(
        data =>{
          this.toastr.success('Dispositivo guardado correctamente','',{
            timeOut: 10000,
            positionClass: 'toast-top-center'
          });
          this.route.navigate(['/nav']);
      },
        err =>{
          this.toastr.error('Error al guardar dispositivo','',{
            timeOut: 10000,
            positionClass: 'toast-top-center'
        });
        this.route.navigate(['/nav']);
      });
  }
}


