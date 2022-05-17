import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CaracteristicaPropia } from '../models/caracteristica-propia';
import { CaracteristicasPropiasService } from '../service/caracteristicas-propias.service';

@Component({
  selector: 'app-caracteristicas-propias',
  templateUrl: './caracteristicas-propias.component.html',
  styleUrls: ['./caracteristicas-propias.component.css']
})
export class CaracteristicasPropiasComponent implements OnInit {
  caracteristicaPantalla: any = this.caracteristicasService.getTipo().tipo
  caracteristica = ''
  private urlBase = "http://localhost:8080/api/"
  constructor(private caracteristicasService : CaracteristicasPropiasService, private http: HttpClient, private toastr: ToastrService, private route: Router) { }

  ngOnInit(): void {

  }

  nuevaCaracteristica(){
    const caracteristicaNueva = new CaracteristicaPropia(this.caracteristica, this.caracteristicasService.tipo)
    this.http.post(this.urlBase+"caracteristica", caracteristicaNueva).subscribe(
      data=>{
        this.toastr.success("Nueva caracteristica añadida", "¡Hecho!")
        this.route.navigate(['/dispositivos'])
        err=>{
          this.toastr.error("No hemos podido insertar la caracteristica", "ERROR")
          this.route.navigate(['/nueva-caracteristica-propia'])
        }
      }
    )
  }

}
