import { Component, OnInit } from '@angular/core';
import { ParamFiltrosOrdenadoresService } from '../param-filtros-ordenadores.service';

@Component({
  selector: 'app-aside-filtros-tipos',
  templateUrl: './aside-filtros-tipos.component.html',
  styleUrls: ['./aside-filtros-tipos.component.css']
})
export class AsideFiltrosTiposComponent implements OnInit {

  constructor(private paramsFiltros:ParamFiltrosOrdenadoresService) { }

  ngOnInit(): void {
  }
  setPatronTipo(unPatronTipo:string){
    this.paramsFiltros.setPatronTipo(unPatronTipo)
    }
}
