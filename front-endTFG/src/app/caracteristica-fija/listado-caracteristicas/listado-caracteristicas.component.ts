import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BdOrdenadoresService } from 'src/app/bd-ordenadores.service';
import { ParamFiltrosOrdenadoresService } from 'src/app/param-filtros-ordenadores.service';

@Component({
  selector: 'app-listado-caracteristicas',
  templateUrl: './listado-caracteristicas.component.html',
  styleUrls: ['./listado-caracteristicas.component.css']
})
export class ListadoCaracteristicasComponent implements OnInit {
  private caracteristicas: any
  private urlBase = 'http://localhost:8080/api/'
  constructor(private http: HttpClient, private paramsFiltros: ParamFiltrosOrdenadoresService, private bdordenadores:BdOrdenadoresService) { }

  ngOnInit(): void {
    this.http.get(this.urlBase + 'caracteristicasfijas').subscribe(
      (data) => {
        this.caracteristicas = data
      })

  }
getCaracteristicas() {
  return this.bdordenadores.getCaracteristicas()
}
  getPatron() {
    return this.paramsFiltros.getPatron();
  }

}
