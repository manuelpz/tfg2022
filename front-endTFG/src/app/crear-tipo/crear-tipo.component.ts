import { Component, OnInit } from '@angular/core';
import { BdOrdenadoresService } from '../bd-ordenadores.service';

@Component({
  selector: 'app-crear-tipo',
  templateUrl: './crear-tipo.component.html',
  styleUrls: ['./crear-tipo.component.css']
})
export class CrearTipoComponent implements OnInit {

  constructor(private bdOrdenadores:BdOrdenadoresService) { }

  ngOnInit(): void {
  }
  setCrearTipo(crearTipo:string){
    this.bdOrdenadores.setCrearTipos(crearTipo)
    }
  JsonTipo(){
    this.bdOrdenadores.JsonTipo()
  }
}
