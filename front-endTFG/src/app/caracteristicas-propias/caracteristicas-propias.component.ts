import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CaracteristicaPropia } from '../models/caracteristicas/caracteristica-propia';
import { CaracteristicasPropiasService } from '../service/caracteristicas-propias.service';

@Component({
  selector: 'app-caracteristicas-propias',
  templateUrl: './caracteristicas-propias.component.html',
  styleUrls: ['./caracteristicas-propias.component.css'],
})
export class CaracteristicasPropiasComponent implements OnInit {
  caracteristicaPantalla: any = this.caracteristicasService.getTipo()
  caracteristica = '';
  private urlBase = 'http://localhost:8080/api/';
  constructor(
    private caracteristicasService: CaracteristicasPropiasService,
    private http: HttpClient,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  nuevaCaracteristica() {
    const caracteristicaNueva = new CaracteristicaPropia(
      this.caracteristica,
      this.caracteristicasService.tipo
    );
    this.http
      .post(this.urlBase + 'caracteristica', caracteristicaNueva)
      .subscribe((data) => {
        this.toastr.success('Nueva caracteristica añadida', '¡Hecho!');
        this.route.navigate(['/tipos']);
      },
        (err) => {
          this.toastr.error(
            'Esta caracteristica ya existe',
            'ERROR'
          )
          this.route.navigate(['/nueva-caracteristica-propia']);
        })
  }
}
