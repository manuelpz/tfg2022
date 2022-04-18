import { Component, OnInit } from '@angular/core';
import { BdOrdenadoresService } from '../bd-ordenadores.service';

@Component({
  selector: 'app-resultados-impresoras',
  templateUrl: './resultados-impresoras.component.html',
  styleUrls: ['./resultados-impresoras.component.css']
})
export class ResultadosImpresorasComponent implements OnInit {

  constructor(private bdOrdenadores:BdOrdenadoresService) { }

  ngOnInit(): void {
  }
  getOrdenadores(){
    return this.bdOrdenadores.getOrdenadores()
  }
  
}
