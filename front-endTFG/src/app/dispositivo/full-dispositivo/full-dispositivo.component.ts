import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToastrService } from 'ngx-toastr';
import { BdOrdenadoresService } from 'src/app/bd-ordenadores.service';

import { caracteristicaf } from 'src/app/models/caracteristicaf';
import { Resultado } from 'src/app/models/resultado';
import { ResultadoFijo } from 'src/app/models/resultado-fijo';
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
  caracteristicasf: caracteristicaf;
  opciones: any;
  opcionf: any[] = []
  respuesta: string[] = []


  //VARIABLES PRIVADAS
  private caracteristicasUrl = 'http://localhost:8080/api/caracteristicas';
  private urlCaracteristicas = 'http://localhost:8080/api/caracteristicasfijas';

  constructor(private dispositivoService: DispositivoService,
              private bdOrdenadores: BdOrdenadoresService,
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

        //OBTENCION CARACTERISTICAS FIJAS
        this.http.get(this.urlCaracteristicas).subscribe((response: any) => {
          this.caracteristicasf = response;
        })

    }

    //GUARDAR EL DISPOSITIVO POR COMPLETO
    guardarFull(){
    for(let i = 0; i < this.respuesta.length; i++){
      let caracteristicaf = this.caracteristicasf[i];
      const resultadoFijo = new ResultadoFijo(this.ultimoDispositivo, caracteristicaf, this.respuesta[i]);
      console.log(resultadoFijo);
      this.dispositivoService.guardarResultadoFijo(resultadoFijo).subscribe(
        data =>
        console.log("ResultadoFijo guardado")
      )
    }

    for(let i = 0; i < this.opcionf.length; i++){
      let caracteristica = this.opcionf[i].caracteristica;
      const resultado = new Resultado(this.ultimoDispositivo, caracteristica, this.opcionf[i]);
      this.dispositivoService.guardarResultado(resultado).subscribe(
        data =>{
          console.log("Resultado guardado")
        }
      )
    }
      this.toastr.success('Dispositivo guardado correctamente', 'Guardado');
      this.route.navigate(['/dispositivos']);
      err=>{
        this.toastr.error('Error al guardar dispositivo', 'Error');
      }
      this.bdOrdenadores.getDispositivos()
  }
  getCaracteristicas(): any {
    return this.caracteristicasf;
  }

  getOptions(tipo: string): any {
    return this.caracteristicas.filter(caracteristica => caracteristica.tipo.tipo === tipo);
  }

}



