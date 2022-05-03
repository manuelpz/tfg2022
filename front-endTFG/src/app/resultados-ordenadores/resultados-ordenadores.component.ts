import { Component, OnInit } from '@angular/core';
import { BdOrdenadoresService } from '../bd-ordenadores.service';
import { ParamFiltrosOrdenadoresService } from '../param-filtros-ordenadores.service';

@Component({
  selector: 'app-resultados-ordenadores',
  templateUrl: './resultados-ordenadores.component.html',
  styleUrls: ['./resultados-ordenadores.component.css']
})
export class ResultadosOrdenadoresComponent implements OnInit {

  constructor(private bdOrdenadores:BdOrdenadoresService, private paramsFiltros:ParamFiltrosOrdenadoresService) { }

  ngOnInit(): void {
  }
  getOrdenadores(){
    return this.bdOrdenadores.getOrdenadores()
  }
  getPatron(){
    return this.paramsFiltros.getPatron()
  }
}
