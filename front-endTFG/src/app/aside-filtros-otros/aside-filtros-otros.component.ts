import { Component, OnInit } from '@angular/core';
import { BdOrdenadoresService } from '../bd-ordenadores.service';
import { ParamFiltrosOtrosService } from '../param-filtros-otros.service';

@Component({
  selector: 'app-aside-filtros-otros',
  templateUrl: './aside-filtros-otros.component.html',
  styleUrls: ['./aside-filtros-otros.component.css']
})
export class AsideFiltrosOtrosComponent implements OnInit {

  constructor(private bdOrdenadores:BdOrdenadoresService,private paramsFiltros:ParamFiltrosOtrosService) { }

  ngOnInit(): void {
  }
getOrdenadores(){
  return this.bdOrdenadores.getOrdenadores()
}
setTipo(unTipo:string){
  this.paramsFiltros.setTipo(unTipo)
  }
}
