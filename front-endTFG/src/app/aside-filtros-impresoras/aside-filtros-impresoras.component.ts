import { Component, OnInit } from '@angular/core';
import { BdOrdenadoresService } from '../bd-ordenadores.service';

@Component({
  selector: 'app-aside-filtros-impresoras',
  templateUrl: './aside-filtros-impresoras.component.html',
  styleUrls: ['./aside-filtros-impresoras.component.css']
})
export class AsideFiltrosImpresorasComponent implements OnInit {

  constructor(private bdOrdenadores:BdOrdenadoresService) { }

  ngOnInit(): void {
  }
getOrdenadores(){
  return this.bdOrdenadores.getOrdenadores()
}
}
