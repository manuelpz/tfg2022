import { Component, OnInit } from '@angular/core';
import { BdOrdenadoresService } from '../bd-ordenadores.service';
import { ParamFiltrosOtrosService } from '../param-filtros-otros.service';

@Component({
  selector: 'app-resultados-otros',
  templateUrl: './resultados-otros.component.html',
  styleUrls: ['./resultados-otros.component.css']
})
export class ResultadosOtrosComponent implements OnInit {

  constructor(private bdOrdenadores:BdOrdenadoresService,private paramsFiltros:ParamFiltrosOtrosService) { }

  ngOnInit(): void {
  }
  getOrdenadores(){
    return this.bdOrdenadores.getOrdenadores()
  }
  getTipo(){
    return this.paramsFiltros.getTipo()
  }
}
