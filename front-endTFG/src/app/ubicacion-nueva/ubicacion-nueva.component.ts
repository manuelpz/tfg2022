import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BdOrdenadoresService } from '../bd-ordenadores.service';
import { Ubicacion } from '../models/ubicacion';
import { UbicacionDispositivos } from '../models/ubicacion-dispositivos';
import { DispositivoService } from '../service/dispositivo.service';

@Component({
  selector: 'app-ubicacion-nueva',
  templateUrl: './ubicacion-nueva.component.html',
  styleUrls: ['./ubicacion-nueva.component.css'],
})
export class UbicacionNuevaComponent implements OnInit {
  lugar: string;
  descripcion: string;
  localDateTime: Date;
  fecha_muerte = 'Todavía sin definir';
  ultimaUbicacion: any
  private urlLastUbicacion = 'http://localhost:8080/api/dispositivo/lastUbicacion'

  constructor(
    private dispositivoService: DispositivoService,
    private bdOrdenadores:BdOrdenadoresService,
    private http: HttpClient,
    private route: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(
  ): void {}

  actualizarUbicacion() {
    const ubicacion = new Ubicacion(
      this.lugar,
      this.descripcion,
      this.localDateTime,
      this.fecha_muerte
    );
    this.dispositivoService.guardarUbicacion(ubicacion).subscribe((data) => {
      this.http.get(this.urlLastUbicacion).subscribe((response: any) => {
        this.ultimaUbicacion = response;
        const ubicacionDispositivo = new UbicacionDispositivos(
          this.ultimaUbicacion,
          this.bdOrdenadores.ultimoDispositivo
        );
        this.dispositivoService
          .guardarUbicacionDispositivo(ubicacionDispositivo)
          .subscribe((data) => {
            this.toastr.success(
              'Dispositivo guardado correctamente',
              'Guardado'
            );
            this.route.navigate(['/dispositivos']);
            (err) => {
              this.toastr.error('Error al guardar dispositivo', 'Error');
            };
            this.bdOrdenadores.getDispositivos();
          });
      });
    });
  }
}
