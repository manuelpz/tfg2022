import { Component, OnInit } from '@angular/core';
import { BdOrdenadoresService } from '../bd-ordenadores.service';
import { ParamFiltrosOrdenadoresService } from '../param-filtros-ordenadores.service';

@Component({
  selector: 'app-aside-filtros-ordenadores',
  templateUrl: './aside-filtros-ordenadores.component.html',
  styleUrls: ['./aside-filtros-ordenadores.component.css']
})
export class AsideFiltrosOrdenadoresComponent implements OnInit {

  constructor(private bdOrdenadores:BdOrdenadoresService,private paramsFiltros:ParamFiltrosOrdenadoresService) { }

  ngOnInit(): void {
  }
getOrdenadores(){
  return this.bdOrdenadores.getOrdenadores()
}
setMarca(unMarca:string){
  this.paramsFiltros.setMarca(unMarca)
  }

  getMarca(){
    return this.paramsFiltros.getMarca()
  }
}
