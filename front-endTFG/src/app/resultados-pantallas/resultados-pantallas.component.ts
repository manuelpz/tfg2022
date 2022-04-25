import { Component, OnInit } from '@angular/core';
import { BdOrdenadoresService } from '../bd-ordenadores.service';
import { ParamFiltrosPantallasService } from '../param-filtros-pantallas.service';

@Component({
  selector: 'app-resultados-pantallas',
  templateUrl: './resultados-pantallas.component.html',
  styleUrls: ['./resultados-pantallas.component.css']
})
export class ResultadosPantallasComponent implements OnInit {

  constructor(private bdOrdenadores:BdOrdenadoresService,private paramsFiltros:ParamFiltrosPantallasService) { }

  getOrdenadores(){
    return this.bdOrdenadores.getOrdenadores()
  }
  getMarca(){
    return this.paramsFiltros.getMarca()
  }
  ngOnInit(): void {
  }

}
