import { Component, OnInit } from '@angular/core';
import { BdOrdenadoresService } from '../bd-ordenadores.service';
import { ParamFiltrosOrdenadoresService } from '../param-filtros-ordenadores.service';

@Component({
  selector: 'app-tipos-resultados',
  templateUrl: './tipos-resultados.component.html',
  styleUrls: ['./tipos-resultados.component.css']
})
export class TiposResultadosComponent implements OnInit {

  constructor(private bdOrdenadores:BdOrdenadoresService, private paramsFiltros:ParamFiltrosOrdenadoresService) { }

  ngOnInit(): void {
  }
  getTipos(){
    return this.bdOrdenadores.getTipos()
  }
  getPatronTipo(){
    return this.paramsFiltros.getPatronTipo()
  }
}
