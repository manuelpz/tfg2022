import { Component, OnInit } from '@angular/core';
import { BdOrdenadoresService } from '../bd-ordenadores.service';
import { ParamFiltrosPantallasService } from '../param-filtros-pantallas.service';

@Component({
  selector: 'app-aside-filtros-pantallas',
  templateUrl: './aside-filtros-pantallas.component.html',
  styleUrls: ['./aside-filtros-pantallas.component.css']
})
export class AsideFiltrosPantallasComponent implements OnInit {

  constructor(private bdOrdenadores:BdOrdenadoresService, private paramsFiltros:ParamFiltrosPantallasService) { }

  ngOnInit(): void {
  }
  getOrdenadores(){
    return this.bdOrdenadores.getOrdenadores()
  }
  setMarca(unMarca:string){
    this.paramsFiltros.setMarca(unMarca)
    }
}
