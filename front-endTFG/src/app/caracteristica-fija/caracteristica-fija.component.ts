import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BdOrdenadoresService } from '../bd-ordenadores.service';
import { Caracteristicafija } from '../models/caracteristicas/caracteristicafija';

@Component({
  selector: 'app-caracteristica-fija',
  templateUrl: './caracteristica-fija.component.html',
  styleUrls: ['./caracteristica-fija.component.css'],
})
export class CaracteristicaFijaComponent implements OnInit {
  private urlBase = 'http://localhost:8080/api/';
  caracteristica = '';
  constructor(
    private http: HttpClient,
    private bdordenadores: BdOrdenadoresService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  nuevaCaracteristica() {
    const caracteristica = new Caracteristicafija(this.caracteristica)
    this.http.post(this.urlBase + 'nuevo/caracteristicafija', caracteristica)
      .subscribe(
        data => {
        this.toastr.success('Nueva caracteristica añadida', '¡Hecho!',{
          timeOut: 3000, positionClass: 'toast-top-center'
        })
        this.bdordenadores.getCaracteristicasRefresh()
        this.route.navigate(['/caracteristicas-fijas'])
      },
        err => {
          this.toastr.error(
            'Esta caracteristica ya existe',
            'ERROR', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        })
      })
      }
  }
